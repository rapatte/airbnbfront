import { withRouter } from 'react-router-dom';
import Nav from './Nav.jsx';

function Header() {
  return (
    <header>
      <h1>Airbnb</h1>
      <Nav />
    </header>
  );
}

export default withRouter(Header);
