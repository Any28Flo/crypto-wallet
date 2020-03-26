import React, { createContext, useState} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css'

import Nav from "./components/nav/Nav";
import SignUp from './components/auth/SignUp'
import CoinsList from "./components/coinsList/CoinsList";
import CoinDetail from "./components/coinDetail/CoinDetail";
import LogIn from "./components/auth/LogIn";
import UserBoard from "./userBoard/UserBoard";
 export const userContext = createContext({ user: null , setUser : () => {}});

const App = props => {
    const [newUser , updateUser] = useState(null);

    return (
        <userContext.Provider value={{user: newUser , setUser : updateUser}}>
            <div className="App">
                <Nav/>
                <Switch>

                        <Route exact path='/signup' render={() => <SignUp/>}/>
                        <Route exact path='/' render={() => <LogIn/>}/>
                    <Route path='/coinsList' component={CoinsList} />
                    <Route path='/:id' component={CoinDetail} />
                    <Route path='/userBoard' component={UserBoard}/>
                </Switch>
            </div>
        </userContext.Provider>
    );
};


export default App;
