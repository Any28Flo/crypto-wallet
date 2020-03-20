import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './components/auth/Signup'
function App() {
  return (
      <Router>
        <div className="App">
          <Route exact path="/signup" component={Signup}/>
        </div>

      </Router>

);
}


export default App;
