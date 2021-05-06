import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

function Bookingbloc(props) {
  return (
    <div className="bookingbloc" id="1000">
      <h2>name</h2>
      <p>deccription</p>
      <p>city</p>

      <div className="deatilsbloc">
        <div><p>Rooms</p><p>2</p></div>
        <div><p>Bathrooms</p><p>1</p></div>
        <div><p>Guests</p><p>4</p></div>
        <div><p>Price</p><p></p>100</div>
      </div>

      <div className="reservedsections">

        <div className="users">
          <p>Reserved by <p>Firstname</p>   <p>Lastname</p></p>
          <div className="deatilsblocfordate">
          <div><p>Checkin</p><p>22/05/2020</p></div>
          <div><p>Checkout</p><p>25/05/2020</p></div>
      </div>

          <button className="button_red ">Contact</button>
        </div>

      </div>
    </div>
  );
}

export default withRouter(Bookingbloc);
