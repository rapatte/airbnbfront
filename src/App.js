import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './pages/partials/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={ Home } />
    </Switch>
  </Router>
  );
}

export default App;
