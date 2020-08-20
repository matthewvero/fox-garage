import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import BookingPage from './pages/bookingpage/bookingpage.component'
import Header from './components/header/header/header.component'
import Footer from "./components/footer/footer.component";
import { setIsMobile } from "./redux/screen-size/screen-size.actions";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Wrapper } from "./pages/page/page-transition-wrapper";
import MOTPage from "./pages/motpage/motpage.component";
import CompleteServicePage from "./pages/completeservicepage/completeservicepage.component";
import StandardServicePage from './pages/standardservicepage/standardservicepage.component';
function App({setIsMobile, location, history}) {

    const [isMobile, setIsMobileHook] = useState(window.innerWidth > 1150 ? true : false);

    const debouncedIsMobile = useDebounce(isMobile, 500)
    // prevent resize listener from firing too quickly

    history.listen((location, action) => {
      window.scrollTo(0, 0)
    }) // Check if the history changes and reset scroll
  

    useEffect(() => {
        const resizeListener = () => {
            setIsMobileHook(window.innerWidth > 1150 ? true : false);
        };
        window.addEventListener("resize", resizeListener, {passive: true});
        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    });

    useEffect(() => {
            setIsMobile(debouncedIsMobile)
    }, [debouncedIsMobile, setIsMobile])

    return (
        <div className="App">
            <Header></Header>
            <Wrapper>
              <TransitionGroup>
                <CSSTransition
                  classNames='page'
                  unmountOnExit
                  timeout={800}
                  key={location.key}
                >
                <Switch location={location}>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/prices" component={BookingPage} />
                    <Route exact path='/mot' component={MOTPage}/>
                    <Route exact path='/completeservice' component={CompleteServicePage}/>
                    <Route exact path='/standardservice' component={StandardServicePage}/>
                    
                </Switch>
                </CSSTransition>
              </TransitionGroup>
            </Wrapper>
            <Footer/>

        </div>
    );
}


function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
  
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] // Only re-call effect if value or delay changes
    );
  
    return debouncedValue;
  }

const mapDispatch = dispatch => ({
    setIsMobile: mobile => dispatch(setIsMobile(mobile))
})

export default withRouter(connect(null, mapDispatch)(App));
