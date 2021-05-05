/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import { placeService, CitiesService } from '../../services/index';
import CardPlace from './Items/CardPlace.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      cities: [],
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await placeService.getAll();
      this.setState({ places: response.data.places });

      const cities = await CitiesService.getAll();
      this.setState({ cities: cities.data });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    // NEED A FUNCTION TO AVOID LONG FUNCTIONS
    const { cities, places } = this.state;

    const getCity = (cityId) => {
      const city = cities.find((element) => element.id === cityId);
      return city ? city.name : cityId;
    };

    const listPlaces = places.map((place, i) => <CardPlace key={i} name={place.name}
    description={place.description}
    city={getCity(place.city)}/>);

    return (
        <main>
            {/* <h1>{(places.length !== 0) ? places[10].name : null}</h1> */}
            <section className='grid-box'>
              {listPlaces}
            </section>
        </main>
    );
  }
}
export default Home;
