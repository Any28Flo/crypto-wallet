import React, { useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import {UserContext }from "./context/userContext"

import LandingPage from "./components/landingPage/LandingPage";
import ProfilePage from "./components/userBoard/ProfilePage";
import LogIn from "./components/auth/LogIn";
import Footer from "./components/Footer/Footer"
import Nav from "./components/nav/Nav"
import './App.css';


const App = props => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });


    return (
        <UserContext.Provider value={{userData,setUserData}}>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/login' component={LogIn}/>
                    <Route exact path='/user-board' render={ () => <ProfilePage/>}/>

                </Switch>
                <Footer/>
            </div>
        </UserContext.Provider>
    )
};
export default App;
