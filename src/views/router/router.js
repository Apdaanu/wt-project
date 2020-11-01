import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavBar from '../components/nav-bar';
import HomeView from '../home/home';
import HotelBookView from '../hotel-book/hotel-book-view';
import LoginView from '../login/login-view';
import NotFound from './not-found';
import ProtectedRoute from './protected-route';

const AppRouter = props => {
  return <Router>
    <div>
    <AppNavBar />
    <Switch>
      <ProtectedRoute exact path="/" component={HomeView} />
      <ProtectedRoute path="/hotel/:id" component={HotelBookView} />
      <Route exact path="/login" component={LoginView} />
      <Route path="*" component={NotFound} />
    </Switch>
    </div>
  </Router>
  ;
}

export default AppRouter;