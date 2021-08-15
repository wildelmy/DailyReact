import React, { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import CursoHtml from './pages/CursoHtml';
import './style/style.css';

export const UserContext = createContext(null)

const App = () => {

  const user = {
    email: 'wildelmycolina@gmail.com'
  }

  return (
    <UserContext.Provider value={user}>
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
    </UserContext.Provider>
  )
}

export default App