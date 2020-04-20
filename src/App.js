import React, { useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import UserContext from "./context"
import LandingPage from "./components/landingPage/LandingPage";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";
import ProfilePage from "./components/userBoard/ProfilePage";
import CoinsList from "./components/coinsList/CoinsList";


import './App.css';
import CoinDetail from "./components/coinDetail/CoinDetail";


const App = props => {
    const userHook = useState({user:null});

    return (
        <UserContext.Provider value={userHook}>
            <div className="App">
                <Switch>
                    <Route exact path='/login' render = { () => <LogIn/>}/>
                    <Route exact path='/signup' render={ () => <SignUp/>}/>
                    <Route exact path='/user-board' render={ () => <ProfilePage/>}/>
                    <Route exact path='/all-cryptos' component={CoinsList} />
                    <Route exact path='/all-cryptos/:id' component={CoinDetail} />
                    <Route exact path='/' component={LandingPage}/>

                </Switch>
            </div>
        </UserContext.Provider>
    )
};
export default App;
