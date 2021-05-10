/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import { placeService, CitiesService } from '../../services/index';
import CardPlace from './Items/CardPlace.jsx';
import { appContext } from '../../store';

class Home extends Component {
  static contextType = appContext;

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
      const defaultCity = 'Paris';
      const response = await placeService.getPlacesByCity(defaultCity);

      // get current month and year
      const today = new Date();

      const month = ((`0${today.getMonth() + 1}`).slice(-2));
      const month2 = ((`0${today.getMonth() + 2}`).slice(-2));
      const year = today.getFullYear();

      const checkIn = `${year}-${month}-01`;
      const checkOut = `${year}-${month2}-01`;
      const unavailables = await placeService.getUnavailables(checkIn, checkOut);
      this.setState({ unavailables: unavailables.data.places });

      // get city name
      const cities = await CitiesService.getAll();
      this.setState({ cities: cities.data });

      // remove unavailables from places
      const places = [...response.data.places];
      const availables = [];

      places.forEach((element) => {
        if (!this.state.unavailables.some((una) => una.place === element.id)
        && !availables.some((obj) => obj.id === element.id)) {
          availables.push(element);
        }
      });

      this.setState({ places: availables });
    }
    catch (e) {
      this.setState({ error: 'erreur serveur' });
    }
  }

  render() {
    // NEED A FUNCTION TO AVOID LONG FUNCTIONS
    // console.log(this.state.places);
    const { cities, places } = this.state;

    const getCity = (cityId) => {
      const city = cities.find((element) => element.id === cityId);
      return city ? city.name : cityId;
    };

    const listPlaces = places.map((place, i) => <CardPlace id={place.id}
    history={this.props.history}
    key={i} name={place.name}
    description={place.description}
    city={getCity(place.city)}/>);
    return (
        <main>
            {/* <h1>{(places.length !== 0) ? places[10].name : null}</h1> */}
            {this.context.user !== null && <h6>Connected as {this.context.user.user.email} </h6>}
            <section className='grid-box'>
              {listPlaces}
            </section>

        </main>
    );
  }
}
export default Home;
