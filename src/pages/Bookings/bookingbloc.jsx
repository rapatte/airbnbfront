import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

function Bookingbloc(props) {
  return (
    <div className="bookingbloc" id={props.id}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{props.city}</p>

      <div className="deatilsbloc">
        <div><p>Rooms</p><p>{props.room}</p></div>
        <div><p>Bathrooms</p><p>{props.bathroom}</p></div>
        <div><p>Guests</p><p>{props.guest}</p></div>
        <div><p>Price</p><p></p>{props.price}</div>
      </div>

      <div className="reservedsections">

        <div className="users">
          <p>Reserved by <p>{props.firstname}</p>   <p>{props.lastname}</p></p>
          <div className="deatilsblocfordate">
          <div><p>Checkin</p><p>{props.checkin}</p></div>
          <div><p>Checkout</p><p>{props.checkout}</p></div>
      </div>

          <a href="#"><button className="button_red ">Contact</button></a>
        </div>

      </div>
    </div>
  );
}

export default withRouter(Bookingbloc);
