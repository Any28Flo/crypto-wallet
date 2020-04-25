import React, { useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import UserContext from "./context"
import LandingPage from "./components/landingPage/LandingPage";
import Footer from "./components/Footer/Footer"
import Nav from "./components/nav/Nav"

import './App.css';


const App = props => {
    const userHook = useState({user:null});

    return (
        <UserContext.Provider value={userHook}>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                </Switch>
                <Footer/>
            </div>
        </UserContext.Provider>
    )
};
export default App;
