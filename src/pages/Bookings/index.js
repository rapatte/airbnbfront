import React, { Component, Fragment } from 'react';
import { bookingService } from '../../services/index';
import './style.scss';
import Bookingbloc from './bookingbloc.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: [],
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await bookingService.getAll();
      console.log(response.data.bookingTab);
      this.setState({ booking: response.data.bookingTab });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    const bookings = this.state.booking;
    console.log(bookings);
    const bookinglist = bookings.map((booking) => <Bookingbloc id={booking.id}
    name={booking.place.name} description={booking.place.description} city={booking.place.city}
    room={booking.place.rooms}bathroom={booking.place.bathrooms} guest={booking.place.city}
    price={booking.place.price_by_night} firstname={booking.user.first_name}
    lastname={booking.user.last_name} checkin={booking.check_in}
    checkout={booking.check_out}/>);
    return (
      <main>
        {bookinglist}
      </main>
    );
  }
}
export default Home;
