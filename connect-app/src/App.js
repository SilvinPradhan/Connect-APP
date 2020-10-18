import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import MenuBar from './components/MenuBar'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'

function App() {
  return (
    <Router>
      <Container>
      <MenuBar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      </Container>
    </Router>
  );
}

export default App;
