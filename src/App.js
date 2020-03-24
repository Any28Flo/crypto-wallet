import React, {useState, Fragment, useContext} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css'

import Nav from "./components/nav/Nav";
import SignUp from './components/auth/Signup'
import CoinsList from "./components/coinsList/CoinsList";
import CoinDetail from "./components/coinDetail/CoinDetail";
import LogIn from "./components/auth/LogIn"
import AuthService from "./components/auth/auth-service";
import ProtectedRoute from './components/auth/protected-route';
//import MyContext from './context';
export const UserContext = useContext();

const App = props => {
    const [user , setUser] = useState(null);

    return (
        <UserContext.Provider value={{user: user}}>
            <div className="App">
                <Nav/>
                <Switch>

                    <Fragment>
                        <Route exact path='/signup' render={() => <SignUp/>}/>
                        <Route exact path='/' render={() => <LogIn/>}/>
                    </Fragment>
                    <ProtectedRoute path='/coinsList' component={CoinsList} />
                    <ProtectedRoute path='/coinsList:id' component={CoinDetail} />
                </Switch>
            </div>
        </UserContext.Provider>
    );
};


export default App;
