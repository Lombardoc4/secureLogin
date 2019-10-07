import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Server = "http://localhost:8080/";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeConf = this.onChangeConf.bind(this);
    this.onRegister = this.onRegister.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmation: '',
      login: 'signIn',
      admin: false,
      added: false,
    }
  }

  onChangeUser(e) {
      this.setState({
        username: e.target.value
        });
    }
  onChangePass(e) {
      this.setState({
        password: e.target.value
        });
    }
  onChangeEmail(e) {
      this.setState({
        email: e.target.value
        });
      }
  onChangeConf(e) {
      this.setState({
        confirmation: e.target.value
        });
      }
  onRegister() {
    var type = this.state.login;
    if (type === 'signIn'){
      this.setState({
        login: 'register'
        });
      }
    else {
      this.setState({
        login: 'signIn'
      });
    }
  }

  added() {
  if(this.state.added) {
    return (
      <p style={{color: 'green'}}> Account has been added! </p>
    );
  }
}



  display() {
    var username =
      <div>
        <label>
          <b>Username: </b>
        </label>
        <input  type="text"
            onChange={this.onChangeUser}
            required
        />
      </div>

    var email =
      <div>
        <label>
          <b>Email: </b>
        </label>
        <input  type="text"
            onChange={this.onChangeEmail}
            required
        />
      </div>

    var password =
      <div>
        <label >
          <b>Password: </b>
        </label>
        <input  type="password"
              onChange={this.onChangePass}
              required
        />
      </div>

    var confirmation =
      <div>
        <label >
          <b>Confirm Password: </b>
        </label>
        <input  type="password"
              onChange={this.onChangeConf}
              required
        />
      </div>

    if (this.state.login !== 'signIn'){
      return (
        <div className="login">
          <h1>
            EUG Welcome's You
          </h1>
          <form>
            {username}
          <br/>
            {email}
          <br/>
            {password}
          <br/>
          {confirmation}
          <br/>

            <button className='btn' onClick={this.onSubmit}> Login </button>

          </form>
        </div>
      )
    }
    else {
      // login form
      return (
        <div className="login">
          <h1>
            Welcome back m8
          </h1>
          <form>
            {username}
          <br/>
            {password}
            {this.props.children}
          <br/>

            <button className='btn' onClick={this.onSubmit}> Login </button>

          </form>
        </div>
      );
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.password != this.state.confirmation) {
        alert('You\'re passwords didnt match');
        return;
    };
    var newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    var serverLocation = 'http://localhost:8080/users/add';
    console.log(newUser);
    axios.post(serverLocation, newUser)
      .then(res => console.log(res.data))
      .catch(function (error){
      console.log(error.response);
    });

    this.setState({
        username: '',
        password: '',
        email: '',
        added: false,
    })

    return <Redirect to='/micros'/>
    }

  render() {
    return (
        <div>
        {this.added()}
        {this.display()}
        <br/>
        <button className='btn' onClick={this.onRegister}>
          {this.state.login === 'signIn' ? 'Register' : 'Sign In'}
        </button>
        </div>
    );
  }
}

export default Login;
