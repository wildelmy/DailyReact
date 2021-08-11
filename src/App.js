import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import CursoHtml from './pages/CursoHtml';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/cursohtml" exact>
          <CursoHtml />
        </Route>
      </Switch>
    </Router>
  )
}

export default App