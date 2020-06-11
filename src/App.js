import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/header-component/header.component";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";


function App() {
    return (
        <div className="App">
            <Header></Header>
          
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </div>
    );
}

export default App;
