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
      unavailables: [],
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await placeService.getAll();
      this.setState({ places: response.data.places });

      const checkIn = '2021-05-01';
      const checkOut = '2021-06-01';
      const unavailables = await placeService.getUnavailables(checkIn, checkOut);
      this.setState({ unavailables: unavailables.data.places });

      // remove unavailables from places

      const cities = await CitiesService.getAll();
      this.setState({ cities: cities.data });
      console.log(this.state);
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
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
