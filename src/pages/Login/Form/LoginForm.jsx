import React from 'react';
import { userService } from '../../../services/index';
import Button from '../../../components/Button/index.jsx';
import { appContext } from '../../../store';

class LoginForm extends React.Component {
    static contextType = appContext;

    constructor(props) {
      super(props);

      this.state = {
        email: '',
        password: '',
        error: null
      };
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    handleClick = async (e) => {
      const { email, password } = this.state;

      try {
        const response = await userService.login(email, password);
        console.log(response);
        localStorage.setItem('token', response.data.token);
        this.context.setAuth(true);
        // this.props.history.push('/bookings');
      }
      catch (err) {
        this.setState({ error: err.message });
      }
    }

    render() {
      return (
        <appContext.Consumer>
        {(store) => (
              <div>
                {/* {console.log(store)} */}
                  {this.state.error && <h6>{this.state.error}</h6>}
                  <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  <Button size="small" value="Se connecter" handleClick={this.handleClick} />
              </div>
        )}
        </appContext.Consumer>
      );
    }
}

export default LoginForm;
