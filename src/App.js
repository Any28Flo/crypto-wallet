import React, {useState, Fragment, useContext} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css'

import Nav from "./components/nav/Nav";
import SignUp from './components/auth/SignUp'
import CoinsList from "./components/coinsList/CoinsList";
import CoinDetail from "./components/coinDetail/CoinDetail";
import LogIn from "./components/auth/LogIn"
import AuthService from "./components/auth/auth-service";
import ProtectedRoute from './components/auth/protected-route';
//import MyContext from './context'
// const UserContext = useContext();

const App = props => {
    const [user , setUser] = useState(null);

    return (
       // <UserContext.Provider value={{user: user , setUser}}>
            <div className="App">
                <Nav/>
                <Switch>

                        <Route exact path='/signup' render={() => <SignUp/>}/>
                        <Route exact path='/' render={() => <LogIn/>}/>
                    <Route path='/coinsList' component={CoinsList} />
                    <Route path='/coinsList:id' component={CoinDetail} />
                </Switch>
            </div>
       // </UserContext.Provider>
    );
};


export default App;
