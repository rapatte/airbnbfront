import React from 'react';
import { placeService } from '../../services/index';
import { appContext } from '../../store';
import Button from '../../components/Button/index.jsx';
import './style.scss';

class CreationForm extends React.Component {
    static contextType = appContext;

    constructor(props) {
      super(props);
      this.state = {
        city: null,
        name: null,
        description: null,
        rooms: null,
        bathrooms: null,
        max_guests: null,
        price_by_night: null,
        host: null
      };
    }

    handleChange = (e) => {
      this.setState({ host: this.context.user.user.id });
      const { name, value } = e.target;
      this.setState({ [name]: Number(value) });
      if (isNaN(Number(value))) {
        this.setState({ [name]: value });
      }
    }

    handleClick = async (e) => {
      try {
        const place = this.state;
        await placeService.createPlace(place);
      }
      catch (err) {
        this.setState({ error: 'erreur serveur' });
      }
    };

    render() {
      return (
        <appContext.Consumer>
        {(store) => (
                    <div className='forms'>
                        {this.state.error && <h6>{this.state.error}</h6>}
                        <input placeholder='city id' type="number" name="city" value={this.state.city} onChange={this.handleChange} />
                        <input placeholder='name' type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        <input placeholder='description' type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                        <input placeholder='rooms' type="number" name="rooms" value={this.state.rooms} onChange={this.handleChange} />
                        <input placeholder='bathrooms' type="number" name="bathrooms" value={this.state.bathrooms} onChange={this.handleChange} />
                        <input placeholder='max guests' type="number" name="max_guests" value={this.state.max_guests} onChange={this.handleChange} />
                        <input placeholder='price by night' type="number" name="price_by_night" value={this.state.price_by_night} onChange={this.handleChange} />
                        <Button size="small" value="Mettre en location" handleClick={this.handleClick} />
                    </div>
        )}
        </appContext.Consumer>
      );
    }
}

export default CreationForm;
