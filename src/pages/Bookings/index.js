import React, { Component, Fragment } from 'react';
import { bookingService } from '../../services/index';

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
      console.log(`booking${response.bookingTab}`);
      this.setState({ booking: response.bookingTab });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    const bookings = this.state.booking;
    const bookinglist = bookings.map((booking) => <li>{booking}</li>);
    return (
        <Fragment>
            <ul>{bookinglist}</ul>
        </Fragment>
    );
  }
}
export default Home;
