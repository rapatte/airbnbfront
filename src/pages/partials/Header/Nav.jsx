import { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './nav.scss';

function Nav(props) {
  const logout = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  };

  return (

  <Fragment>
    <a href="/" className="logo"><img src="https://www.les-parrains.fr/wp-content/uploads/2019/12/Airbnb-Logo_large.png" alt="logo" /></a>
    <details className="nav-list">
    <summary>Menu</summary>
      <Link to='/createPlace'>LOUER</Link>
      <Link to='/bookings'>BOOKING</Link>
      <Link to='/consult'>consult</Link>
      <Link to='/login'>LOGIN</Link>
      <Link onClick={logout}>Deconnexion</Link>
    </details>
    </Fragment>
  );
}

export default withRouter(Nav);
