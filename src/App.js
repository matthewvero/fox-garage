import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Header from './components/header/header/header.component'


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
