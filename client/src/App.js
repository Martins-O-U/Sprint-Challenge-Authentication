import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Users/Home';
import Navbar from './Users/Navbar';
import Login from './Users/Login';
import Jokes from './Users/Jokes';
import {PrivateRoute} from './Users/Auth/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/jokes" component={Jokes} />
    </div>
  );
}

export default App;
