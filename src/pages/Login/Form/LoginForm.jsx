import React from 'react';
import Cookies from 'universal-cookie';
import { userService } from '../../../services/index';
import Button from '../../../components/Button/index.jsx';
import InputText from '../../../components/InputText/index.jsx';
import { appContext } from '../../../store';
import './form.scss';

const cookies = new Cookies();

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
        localStorage.setItem('token', response.data.token);
        cookies.set('authCookie', response.data.token, { path: '/' });
        this.context.setAuth(true);
        this.props.history.push('/');
        const { user } = response.data;
        this.context.setUser({ user });
      }
      catch (err) {
        this.setState({ error: err.message });
      }
    }

    render() {
      return (
        <appContext.Consumer>
        {(store) => (
          <main>
              <form className='login-form'>
                {/* {console.log(store)} */}
                  {this.state.error && <h6>{this.state.error}</h6>}
                  <InputText type='email' name='email' value={this.state.email} handleChange={this.handleChange} placeholder={'Email'} border='top'/>
                  <InputText type='password' name='password' value={this.state.password} handleChange={this.handleChange} placeholder={'Password'} border='bottom'/>
                  <Button size="large" value="Se connecter" handleClick={this.handleClick} />
              </form>
          </main>
        )}
        </appContext.Consumer>
      );
    }
}

export default LoginForm;
