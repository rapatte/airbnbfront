/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import { placeService } from '../../services/index';
import CardPlace from './Items/CardPlace.jsx';

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
    const elements = this.state.places;
    console.log(elements);
    const listPlaces = elements.map((place, i) => <CardPlace key={i} name={place.name}
    description={place.description}/>);

    return (
        <main>
            {/* <h1>{(elements.length !== 0) ? elements[10].name : null}</h1> */}
            <section className='grid-box'>
              {listPlaces}
            </section>
        </main>
    );
  }
}
export default Home;
