import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import { Header } from './pages/partials/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import { appContext } from './store';

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
      <PrivateRoute exact path='/home' component={Home} />
    </Switch>
  </Router>
  );
}

export default App;
