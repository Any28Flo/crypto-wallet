import React, { useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import {UserContext }from "./context/userContext"

import LandingPage from "./components/landingPage/LandingPage";
import ProfilePage from "./components/userBoard/ProfilePage";
import LogIn from "./components/auth/LogIn";
import CoinsList from "./components/coinsList/CoinsList";
import CoinDetail from "./components/coinDetail/CoinDetail";
import Footer from "./components/Footer/Footer"
import Nav from "./components/nav/Nav"
import NavBar from "./components/nav/NavBar";
import './App.css';
import SignUp from "./components/auth/SignUp";


const App = props => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });


    return (
        <UserContext.Provider value={{userData,setUserData}}>
            <div className="App">

                <NavBar/>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/login' component={LogIn}/>
                    <Route exact path='/signup' component={SignUp}/>
                    <Route exact path='/user-board' render={ () => <ProfilePage/>}/>
                    <Route exact path='/all-cryptos' component={CoinsList} />
                    <Route exact path='/all-cryptos/:id' component={CoinDetail} />

                </Switch>
                <Footer/>
            </div>
        </UserContext.Provider>
    )
};
export default App;
