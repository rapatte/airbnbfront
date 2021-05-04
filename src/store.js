import React from 'react';

const appContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuth: false,
      setUser: this.setUser,
      setAuth: this.setAuth
    };
  }

    setUser = (user) => {
      this.setState({ user });
    }

    setAuth = (boolean) => {
      this.setState({ isAuth: boolean });
    }

    render() {
      return (
            <appContext.Provider value={this.state}>
                {this.props.children}
            </appContext.Provider>
      );
    }
}

export { AppProvider, appContext };
// export default appContext;
