import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App