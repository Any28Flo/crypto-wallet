import React, { createContext, useState} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css'

import Nav from "./components/nav/Nav";
import SignUp from './components/auth/SignUp'
import CoinsList from "./components/coinsList/CoinsList";
import CoinDetail from "./components/coinDetail/CoinDetail";
import LogIn from "./components/auth/LogIn";
import UserBoard from "./components/userBoard/UserBoard";
 export const userContext = createContext({ user: null , setUser : () => {}});

const App = props => {
    const [newUser , updateUser] = useState(null);

    return (
        <userContext.Provider value={{user: newUser , setUser : updateUser}}>
            <div className="App">
                <Nav/>
                <Switch>

                    <Route exact path='/signup' render={() => <SignUp/>}/>
                    <Route exact path='/login' render={() => <LogIn/>}/>
                    <Route exact path='/coinsList' component={CoinsList} />
                    <Route exact path='/:id' component={CoinDetail} />
                    <Route exact path='/' render={ ()=> <UserBoard user={newUser}/> }/>}/>
                </Switch>
            </div>
        </userContext.Provider>
    );
};


export default App;
