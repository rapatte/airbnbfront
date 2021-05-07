import React, { Component, Fragment } from 'react';
import { bookingService } from '../../services/index';
import './style.scss';
import Bookingbloc from './bookingbloc.jsx';

class BookingsOnPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: [],
      error: null
    };
  }

  async componentDidMount() {
    try {
      const { id } = this.props.match.params;
      console.log(this.props.match.params);
      const response = await bookingService.showmyplaces(id);
      console.log(response.data);
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
    room={booking.place.rooms}bathroom={booking.place.bathrooms} guest={booking.place.max_guests}
    price={booking.place.price_by_night} firstname={booking.user.first_name}
    lastname={booking.user.last_name} checkin={booking.check_in.substring(0, 10)}
    checkout={booking.check_out.substring(0, 10)}/>);
    return (
      <main>
        {bookinglist}
      </main>
    );
  }
}
export default BookingsOnPlace;
