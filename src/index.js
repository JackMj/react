import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router, Route,BrowserRouter,browserHistory } from 'react-router-dom';  
import Layout from './components/Layout'
import Header from './components/Header'
import Settings from './pages/Settings'
import Archives from './pages/Archives'

const route = (<Router history={browserHistory}> 
    <Route exact path="/" component={App} /> 
    <Route  path="/layout" component={Layout} />
    <Route  path="/archives" component={Archives} />
    <Route  path="/settings" component={Settings} />
  </Router>
  )
ReactDOM.render(route,
  document.getElementById('root')
);
