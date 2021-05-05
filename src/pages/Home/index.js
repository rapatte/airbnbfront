/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import { placeService } from '../../services/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await placeService.getAll();
      // console.log(response.data.places);
      this.setState({ places: response.data.places });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    // NEED A FUNCTION TO AVOID LONG FUNCTIONS
    console.log(this.state.places);
    return (
        <Fragment>
          <h1>{(this.state.places.length !== 0) ? this.state.places[0].name : null}</h1>
        </Fragment>
    );
  }
}
export default Home;
