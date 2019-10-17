import React from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import cookie from 'react-cookies';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    loginStatus: false
  };

  handleChange = event => {
    this.setState({[event.target.name]:event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post('https://test-binar.herokuapp.com/auth/login', user)
      .then(res => {
        cookie.save('token', res.data.result.access_token);
        this.setState({loginStatus: true});
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };
  render() {
    if (cookie.load('token')) {
      return (<Redirect to={'/dashboard'}/>)
    }
    return (
        <div className="App">
        <header className="App-header">
            <h3>Login</h3>
            <div className="loginContainer">
            <Form onSubmit={this.handleSubmit}>
              <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/> <br></br>
              <input type="password" name="password"  placeholder="Password" onChange={this.handleChange}/>
              <Button variant="primary" type="submit" block>
                  Submit
              </Button>
            </Form>
            </div>
            <p>Don't have an account? <a href="/register">Register</a></p>
        </header>
        </div>
    );
  }
}
export default Login;