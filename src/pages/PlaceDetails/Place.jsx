import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import '../Bookings/style.scss';

function Place(props) {
  const { data } = props;
  const place = <div className="bookingbloc" key={data.id}>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>{data.city}</p>
            <div className="deatilsbloc">
              <div><p>Rooms</p><p>{data.rooms}</p></div>
              <div><p>Bathrooms</p><p>{data.bathrooms}</p></div>
              <div><p>Guests</p><p>{data.max_guests}</p></div>
              <div><p>Price</p><p></p>{data.price_by_night}</div>
            </div>
            <button className="button_red ">Contact host</button>
          </div>;
  return (
    <Fragment>
      {place}
    </Fragment>
  );
}

export default withRouter(Place);
