import React, { Component, Fragment } from 'react';
import { placeService } from '../../services/index';
import Place from './Place.jsx';

class PlaceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {}
    };
  }

  async componentDidMount() {
    try {
      const { id } = this.props.match.params;
      const response = await placeService.getOnePlace(id);
      this.setState({ place: response.data });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    return (
      <Fragment>
        <Place data={this.state.place}/>
      </Fragment>
    );
  }
}
export default PlaceDetails;
