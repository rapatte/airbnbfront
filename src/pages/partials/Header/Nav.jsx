import { Link, withRouter } from 'react-router-dom';
import './nav.scss';

function Nav(props) {
  const logout = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  };

  return (
    <ul>
      <li><Link to='/'>LOGO</Link></li>
      <li><Link to='/createPlace'>LOUER</Link></li>
      <li><Link to='/bookings'>BOOKING</Link></li>
      <li><Link to='/consult'>consult</Link></li>
      <li><Link to='/login'>LOGIN</Link></li>
      <li><button onClick={logout}>Deconnexion</button></li>
    </ul>
  );
}

export default withRouter(Nav);
