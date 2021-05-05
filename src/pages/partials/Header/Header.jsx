import { withRouter } from 'react-router-dom';
import Nav from './Nav.jsx';
import SearchBar from './searchBar.jsx';
import './header.scss';

function Header() {
  return (
    <header>
      <Nav />
      <SearchBar />
    </header>
  );
}

export default withRouter(Header);
