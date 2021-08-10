import React from 'react';
import ReactDOM from 'react-dom';
import {
  useParams,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
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
        <Route path="/:id">
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
