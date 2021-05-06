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
      const responsePostPlaces = await placeService.postPlace();
      this.setState({ createdPlace: responsePostPlaces.data });
      const responseGetPlaces = await placeService.getAll();
      this.setState({ myPlaces: responseGetPlaces.data });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    const places = this.state.myPlaces;
    return (
      <Fragment>
        <CreationForm data={this}/>
        <MyPlaces data={places}/>
      </Fragment>
    );
  }
}
export default PlaceCreation;
