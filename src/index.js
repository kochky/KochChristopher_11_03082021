import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter  as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home'
import Propos from './pages/Propos'
import Header from './composants/Header';
import ErrorPage from './pages/Error'
import Location from './pages/Location'
import Footer from './composants/Footer'



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
      <Footer />
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

