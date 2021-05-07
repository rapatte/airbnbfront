import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import '../Bookings/style.scss';

function MyPlaces(props) {
  const { data } = props;
  const places = data.map((place) => <div className="bookingbloc" key={place.id}>
            <h2>{place.name}</h2>
            <p>{place.description}</p>
            <p>{place.city}</p>

            <div className="deatilsbloc">
              <div><p>Rooms</p><p>{place.rooms}</p></div>
              <div><p>Bathrooms</p><p>{place.bathrooms}</p></div>
              <div><p>Guests</p><p>{place.max_guests}</p></div>
              <div><p>Price</p><p></p>{place.price_by_night}</div>
            </div>
            <a href="#"><button className="button_red ">Delete</button></a>
          </div>);
  return (
    <Fragment>
      {places}
    </Fragment>
  );
}

export default withRouter(MyPlaces);
