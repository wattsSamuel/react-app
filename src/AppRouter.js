
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage'
import AboutPage from './Components/AboutPage/AboutPage';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
