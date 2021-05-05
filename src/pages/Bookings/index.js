import React, { Component, Fragment } from 'react';
import { bookingService } from '../../services/index';
import './style.scss';
import Bookingbloc from './bookingbloc.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: null,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await bookingService.getAll();
      console.log(response);
      this.setState({ booking: response.bookingTab });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    const bookings = this.state.booking;
    // console.log(bookings);
    // const bookinglist = bookings.map((booking) => <li>{booking}</li>);
    return (
      <main>

        <Bookingbloc />
      </main>
    );
  }
}
export default Home;
