import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import PersonList from './Components/UsersRecord';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UsersRecord from './Components/UsersRecord';
import User from './Components/User';
import home from './Components/home';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar name="Users Box" />
      <div className="App">
        <Switch>
          <Route path="/" exact component={home}/>
          <Route path="/users" exact component={UsersRecord} />
          <Route path ="/users/:id" component={User}  />
        </Switch>
      </div>
      <Footer /> 
    </Router>
        
  );
}

export default App;
