import { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './nav.scss';

function Nav(props) {
  const logout = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  };

  return (
<<<<<<< HEAD
    <ul>
      <li><Link to='/home'>LOGO</Link></li>
      <li><Link to='/createPlace'>LOUER</Link></li>
      <li><Link to='/bookings'>BOOKING</Link></li>
      <li><Link to='/consult'>consult</Link></li>
      <li><Link to='/login'>LOGIN</Link></li>
      <li><Link to='/myPlaces'>MY PLACES</Link></li>
      <li><button onClick={logout}>Deconnexion</button></li>
    </ul>
=======
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
>>>>>>> 72648f7abe6ed3a9c8978c6d124fe7bc8f8aec98
  );
}

export default withRouter(Nav);
