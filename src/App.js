import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bulma/css/bulma.css'

import Nav from "./components/nav/Nav";
import SignUp from './components/auth/Signup'
import CoinsList from "./components/coinsList/CoinsList";
import CoinDetail from "./components/coinDetail/CoinDetail";
function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
              <Route exact path="/" component={CoinsList}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/:id" component={CoinDetail}/>
          </Switch>
        </div>

      </Router>

);
}


export default App;
