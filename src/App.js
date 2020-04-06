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
export const userContext = createContext({ user: null , setUser : () => {}});

const styles = theme =>({
    root:{
        flexGrow :1
    }
});

const Container = props => <Grid container {...props}/>;
const Item = props => <Grid item {...props}/>;

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

              <Container spacing={0}>
                  <Item xs={12} sm={12} md={12}>
                    <NavBar  isLoggedIn = {false}/>
                  </Item>
                  <Switch>
                      <Route  exact path ='/login' render = {() => <LogIn/>}/>
                      <Route exact path='/user-board' render={ ()=> <UserBoard user={newUser}/> }/>
                      <Route exact path='/all-cryptos' component={CoinsList} />
                  </Switch>

              </Container>
            </div>
        </userContext.Provider>
    );
};


export default App;

//  <Route exact path='/' component={LandingPage}/>
/*


<Switch>/
<Route exact path='/signup' render={() => <SignUp/>}/>
<Route exact path='/login' render={() => <LogIn/>}/>

<Route exact path='/:id' component={CoinDetail} />
<Route exact path='/index' component={LandingPage}/>

</Switch>*/
