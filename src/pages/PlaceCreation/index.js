import React, { Component, Fragment } from 'react';
import { placeService } from '../../services/index';
import CreationForm from './CreationForm.jsx';
import MyPlaces from './MyPlaces.jsx';

class PlaceCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdPlace: {},
      myPlaces: [],
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await placeService.getMyPlaces();
      this.setState({ myPlaces: response.data.places });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    return (
      <main>
        <CreationForm data={this}/>
        <MyPlaces data={this.state.myPlaces}/>
      </main>
    );
  }
}
export default PlaceCreation;
