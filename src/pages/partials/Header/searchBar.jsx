/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
import React from 'react';
import Button from '../../../components/Button/index.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: false
    };
  }

  render() {
    // const isActive = (e) => {
    //   const element = e.currentTarget;
    //   document.querySelectorAll('div.form-group').forEach((div) => {
    //     div.classList.remove('focused');
    //   });

    //   element.parentElement.classList.add('focused');
    // };
    return (
      <form>
        <div className="form-group">
          <input type="search" name="city" />
          <label htmlFor="city">City</label>
        </div>

        <div className="form-group">
          <input type="search" name="guests"/>
          <label htmlFor="guests">Guests</label>
        </div>

        <Button size="small" color="red" value="Rechercher" />
      </form>
    );
  }
}

export default SearchBar;
