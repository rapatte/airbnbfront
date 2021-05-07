import React, { useState, useEffect, useContext } from 'react';
import { LoginForm, RegisterForm } from './Form';

// class Login extends React.Component {
//   render() {
//     console.log(this.props.history.location.pathname);
//     return (
//         <>
//             {<RegisterForm />}
//             <LoginForm history={this.props.history} />
//         </>
//     );
//   }
// }

const Login = (props) => {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    setHistory(props.history.location.pathname);
    console.log(history);
  }, [history, props.history]);

  return (
    <>
        { history === '/signup' && <RegisterForm /> }
        { history === '/login' && <LoginForm history={ props.history } /> }

    </>
  );
};

export default Login;
