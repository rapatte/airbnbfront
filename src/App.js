import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import { Header } from './pages/partials/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import BookingsOnPlace from './pages/Bookingsonplace';
import { appContext } from './store';
import Bookings from './pages/Bookings';
import PlaceCreation from './pages/PlaceCreation';
import Bookingconsulte from './pages/bookingconsulte/index.jsx';
import PlaceDetails from './pages/PlaceDetails';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const store = React.useContext(appContext);
  return (
    <Route {...rest} render={(props) => (
      store.isAuth
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  );
};

function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/signup' component={ Login } />
      <PrivateRoute exact path='/createPlace' component={ PlaceCreation } />
      <PrivateRoute exact path='/myPlaces' component={ PlaceCreation } />
      <Route exact path='/place/:id' component={ PlaceDetails } />
      <Route exact path='/consult' component={ Bookingconsulte } />
      <Route exact path='/bookings' component={Bookings} />
      <Route exact path='/bookings/:id' component={BookingsOnPlace} />
    </Switch>
  </Router>
  );
}

export default App;
