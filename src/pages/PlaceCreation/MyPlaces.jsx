import React from 'react';
import { appContext } from '../../store';

class MyPlaces extends React.Component {
    static contextType = appContext;

    constructor(props) {
      super(props);
      this.state = {
        myPlaces: []
      };
    }

    render() {
      const places = this.props.data;
      return (
        <appContext.Consumer>
        {(store) => (
                    <div className='myPlaces'>
                        {this.state.error && <h6>{this.state.error}</h6>}
                    </div>
        )}
        </appContext.Consumer>
      );
    }
}

export default MyPlaces;
