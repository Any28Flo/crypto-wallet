import React, { createContext, useState} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {withStyles} from "@material-ui/core";
import {Grid} from "@material-ui/core"

import Nav from "./components/nav/Nav";
import SignUp from './components/auth/SignUp'
import CoinsList from "./components/coinsList/CoinsList";
import CoinDetail from "./components/coinDetail/CoinDetail";
import LogIn from "./components/auth/LogIn";
import UserBoard from "./components/userBoard/UserBoard";
import LandingPage from "./components/landingPage/LandingPage";
import NavUser from "./components/nav/NavUser"
import Footer from "./components/Footer/Footer";
export const userContext = createContext({ user: null , setUser : () => {}});

const App = props => {
    const [newUser , updateUser] = useState(null);

    const NavBar = (props) =>{
        const isLoggedIn = newUser;

        if(newUser ===  null){
            return <Nav/>
        }else{
            return <NavUser/>
        }
    };
    NavBar();
    return (
        <userContext.Provider value={{user: newUser , setUser : updateUser}}>
            <div className="App">

                  <NavBar  isLoggedIn = {false}/>
                  <Switch>
                      <Route  exact path ='/login' render = {() => <LogIn/>}/>
                      <Route exact path='/user-board' render={ ()=> <UserBoard user={newUser}/> }/>
                      <Route exact path='/all-cryptos' component={CoinsList} />
                      <Route exact path='/' component={LandingPage}/>
                  </Switch>
                <Footer/>

            </div>
        </userContext.Provider>
    );
};


export default App;

//
/*


<Switch>/
<Route exact path='/signup' render={() => <SignUp/>}/>
<Route exact path='/login' render={() => <LogIn/>}/>

<Route exact path='/:id' component={CoinDetail} />
<Route exact path='/index' component={LandingPage}/>

</Switch>*/
