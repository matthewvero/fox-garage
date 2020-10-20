import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Header from './components/header/header/header.component'
import Footer from "./components/footer/footer.component";
import { setIsMobile } from "./redux/screen-size/screen-size.actions";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Wrapper } from "./pages/page/page-transition-wrapper";
const HybridAndEvPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "HybridAndEvPage" */ './pages/hybridandevpage/hybridandevpage.component'));
const BookingPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "BookingPage" */ './pages/bookingpage/bookingpage.component'));
const MOTPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "MOTpage" */ "./pages/motpage/motpage.component"));
const CompleteServicePage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "CompleteServicePage" */ "./pages/completeservicepage/completeservicepage.component"));
const StandardServicePage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "StandardServicePage" */ './pages/standardservicepage/standardservicepage.component'));
const AirconPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "Aircon" */ './pages/airconpage/airconpage.component'));
const TyreFittingPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "TyreFitting" */ "./pages/tyrefittingpage/tyrefittingpage.component"));
const CambeltsPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "Cambelts" */ "./pages/cambeltspage/cambeltspage.component"));
const BrakeCheckPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "BrakeCheck" */ "./pages/brakecheckpage/brakecheckpage.component"));
const ClutchAndGearboxPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "ClutchAndGearbox" */ "./pages/clutchandgearboxpage/clutchandgearboxpage.component"));
const ExhaustPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "Exhaust" */ "./pages/exhaustpage/exhaustpage.component"));
const SteeringAndSuspensionPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "SteeringAndSuspension" */ "./pages/steeringandsuspension/steeringandsuspension.component"));
const OtherServicesPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "OtherServices" */ "./pages/otherservicespage/otherservicespage.component"));
const BlogPage = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: "OtherServices" */ "./pages/blogpage/blogpage.component"));


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
              <div>
            <Suspense fallback={<div></div>}>
                <Switch location={location}>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/prices" component={BookingPage} />
                    <Route exact path='/mot' component={MOTPage}/>
                    <Route exact path='/completeservice' component={CompleteServicePage}/>
                    <Route exact path='/standardservice' component={StandardServicePage}/>
                    <Route exact path='/aircon' component={AirconPage}/>
                    <Route exact path='/tyrefitting' component={TyreFittingPage}/>
                    <Route exact path='/cambelts' component={CambeltsPage}/>
                    <Route exact path='/brakecheck' component={BrakeCheckPage}/>
                    <Route exact path='/clutchandgearbox' component={ClutchAndGearboxPage}/>
                    <Route exact path='/exhaust' component={ExhaustPage}/>
                    <Route exact path='/steeringandsuspension' component={SteeringAndSuspensionPage}/>
                    <Route exact path='/other' component={OtherServicesPage}/>
                    <Route exact path='/hybridandev' component={HybridAndEvPage}/>
                    <Route exact path='/blogpage' component={BlogPage}/>
                </Switch>
                </Suspense>
                </div>
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
