import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Register extends React.Component {
  state = {
    name: '',
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
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    };
    try{
      axios
      .post('https://test-binar.herokuapp.com/auth/signup', user)
      .then(res => {
        console.log(res);
        this.setState({loginStatus: true});
      });
    } catch(err){
      console.log("AXIOS ERROR: ", err);
    }
    
  };
  render() {
    if (this.state.loginStatus) {
        return (<Redirect to={'/'}/>)
      }
    return (
        <div className="App">
        <header className="App-header">
            <h3>Register</h3>
            <div className="registerContainer">
            <Form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={this.handleChange}/> <br></br>
              <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/> <br></br>
              <input type="password" name="password"  placeholder="Password" onChange={this.handleChange}/>
              <Button variant="primary" type="submit" block>
                  Submit
              </Button>
            </Form>
            </div>
            <p>Already have an account? <a href="/">Login</a></p>
        </header>
        </div>
    );
  }
}
export default Register;