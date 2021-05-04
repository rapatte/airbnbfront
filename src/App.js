import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './pages/partials/Header';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/login' component={ Login } />
    </Switch>
  </Router>
  );
}

export default App;
