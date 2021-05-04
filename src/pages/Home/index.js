import React, { Component, Fragment } from 'react';
import { placeService } from '../../services/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: null,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await placeService.getAll();
      console.log(response);
      this.setState({ places: response.places });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    console.log(this.state.places);
    return (
        <Fragment>
            <h1>ça fonctionne</h1>
        </Fragment>
    );
  }
}
export default Home;
