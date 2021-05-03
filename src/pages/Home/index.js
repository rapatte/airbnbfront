/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import places from '../../services';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: ['vide'],
      error: null
    };
  }

  async componentDidMount() {
    try {
      const responsePlaces = await places.getAll();
      console.log(responsePlaces);
    //   this.setState({ places: responsePlaces.places });
    }
    catch (error) {
      this.setState({ error: 'erreur serveur' });
      console.log(this.state.error);
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
