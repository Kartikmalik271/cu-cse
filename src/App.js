import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/homepage/Navbar';


import Homepage from './page/homepage/homepage';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Homepage} />

          </Switch>
         
      </Router>
    </div>
  );
}

export default App;
