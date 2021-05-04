import React, { Component, Fragment } from 'react';
import { placeService } from '../../services/index';
import CreationForm from './CreationForm.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdPlace: {},
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await placeService.postPlace();
      this.setState({ createdPlace: response.data });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    return (
      <Fragment>
        <CreationForm data={this.createdPlace}/>
      </Fragment>
    );
  }
}
export default Home;
