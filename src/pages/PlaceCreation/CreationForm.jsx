import React from 'react';
import { placeService } from '../../services/index';
import appContext from '../../store';
import Button from '../../components/Button/index.jsx';

class CreationForm extends React.Component {
    static contextType = appContext;

    constructor(props) {
      super(props);

      this.state = {
        cityId: '',
        name: '',
        description: '',
        rooms: '',
        bathrooms: '',
        maxGuets: '',
        priceByNight: '',
        error: null
      };
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    handleClick = async (e) => {
      const {
        cityId, name, description, rooms, bathrooms, maxGuets, priceByNight
      } = this.state;

      try {
        await placeService.createPlace(
          cityId, name, description, rooms, bathrooms, maxGuets, priceByNight
        );
      }
      catch (err) {
        this.setState({ error: e.response.data.error });
      }
    };

    render() {
      return (
        <appContext.Consumer>
        {(store) => (
                    <div>
                        {this.state.error && <h6>{this.state.error}</h6>}
                        <input type="text" name="cityId" value={this.state.cityId} onChange={this.handleChange} />
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                        <input type="number" name="rooms" value={this.state.rooms} onChange={this.handleChange} />
                        <input type="number" name="bathrooms" value={this.state.bathrooms} onChange={this.handleChange} />
                        <input type="number" name="maxGuets" value={this.state.maxGuets} onChange={this.handleChange} />
                        <input type="number" name="priceByNight" value={this.state.priceByNight} onChange={this.handleChange} />
                        <Button size="small" value="Mettre en location" handleClick={this.handleClick} />
                    </div>
        )}
        </appContext.Consumer>
      );
    }
}

export default CreationForm;
