import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home'
import Propos from './pages/Propos'
import Header from './composants/Header';
import ErrorPage from './composants/Error'
import Location from './pages/Location'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/propos">
          <Propos />
        </Route>
        <Route path="/location/:id">
          <Location />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

