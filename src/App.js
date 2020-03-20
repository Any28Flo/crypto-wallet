import React, {useState,Fragment} from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bulma/css/bulma.css'

import Nav from "./components/nav/Nav";
import SignUp from './components/auth/Signup'
import CoinsList from "./components/coinsList/CoinsList";
import CoinDetail from "./components/coinDetail/CoinDetail";
import AuthService from "./components/auth/auth-service";
import MyContext from "./context";

const App = props => {
    const [user , setUser] = useState(null);
    const service = new AuthService();

    const fetchUser = () =>{
        if(user === null){
            service.loggedin()
                .then(response =>{
                    setUser(response)
                })
                .catch( e => setUser(null))
        }
    };


  return (
      <MyContext.Provider value={{user: user , updateContext: setUser}}>
          <Router>
            <div className="App">
              <Nav/>
              <Switch>
                  <Fragment>
                      <Route exact path="/signup" component={SignUp}/>
                  </Fragment>
                  <Route exact path="/" component={CoinsList}/>

                  <Route exact path="/:id" component={CoinDetail}/>
              </Switch>
            </div>

          </Router>
      </MyContext.Provider>

);
};


export default App;
