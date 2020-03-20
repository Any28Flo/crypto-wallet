import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bulma/css/bulma.css'

import SignUp from './components/auth/Signup'
import Nav from "./components/nav/Nav";
function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Route exact path="/signup" component={SignUp}/>
        </div>

      </Router>

);
}


export default App;
