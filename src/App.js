import React, { createContext, useState} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ProfilePage from "./components/userBoard/ProfilePage";
import Nav from "./components/nav/Nav";
import SignUp from './components/auth/SignUp'
import CoinsList from "./components/coinsList/CoinsList";
import CoinDetail from "./components/coinDetail/CoinDetail";
import LogIn from "./components/auth/LogIn";
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
                    <Route exact path='/user-board' render={ ()=> <ProfilePage user={newUser}/> }/>
                    <Route exact path='/signup' render={ ()=> <SignUp/>}/>
                    <Route exact path='/all-cryptos' component={CoinsList} />
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/:id' component={CoinDetail} />
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


<Route exact path='/index' component={LandingPage}/>

</Switch>*/
