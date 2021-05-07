import { withRouter } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Nav from './Nav.jsx';
import SearchBar from './searchBar.jsx';
import './header.scss';
import { appContext } from '../../../store';

const Header = (props) => {
  const [showHideSearch, setSearch] = useState(true);

  const store = useContext(appContext);
  return (
    <header>
      <Nav />
      {store.showSearchBar && <SearchBar />}
    </header>
  );
};

export default withRouter(Header);
