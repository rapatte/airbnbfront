/* eslint-disable camelcase */
import React, { Component } from 'react';
import InputText from '../../../components/InputText/index.jsx';
import Button from '../../../components/Button/index.jsx';
import Select from './Select/index.jsx';
import { userService } from '../../../services/index';

import './form.scss';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      role: 'tourist'
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleClick = async (e) => {
    const {
      email, password, firstName, lastName, role
    } = this.state;
    e.preventDefault();
    try {
      const response = await userService.signup(email, password, firstName, lastName, role);
      console.log(response);
    //   this.props.history.push('/login');
    }
    catch (err) {
      this.setState({ error: err.response.data.message });
    }
  }

  render() {
    return (
        <main>
            {this.state.error && <h6 className='error-form'>{this.state.error}</h6>}
            <form className='signup-form'>
                <Select name={'role'} value={this.state.role} handleChange={this.handleChange}/>
                <InputText name='firstName' type='text' placeholder={'First name'} value={this.state.firstName} handleChange={this.handleChange}/>
                <InputText name='lastName' type='text' placeholder={'Last name'} value={this.state.lastName} handleChange={this.handleChange}/>
                <InputText name='email' type='email' placeholder={'Email'} value={this.state.email} handleChange={this.handleChange}/>
                <InputText name='password' type='password' placeholder={'Password'} value={this.state.password} handleChange={this.handleChange}/>
                <Button type={'submit'} size="large" class='submit-form' value='submit' handleClick={this.handleClick} />
            </form>
        </main>
    );
  }
}

export default RegisterForm;
