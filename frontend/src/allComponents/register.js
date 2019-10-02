import React, { Component } from 'react';
import './login.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeConf = this.onChangeConf.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmation: '',
      login: true,
      admin: false
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


  display() {
    if (!this.state.login){
      return (
        <div>
          <div>
            <p> This is suppose to be the alternative 'backend' interface </p>
          </div>
        </div>
      )
    }
    else {
      // login form
      return (
        <div className="login">
          <h1> EUG Welcome's You </h1>
          <form>
            <label>
            <b>Email: </b>
            </label>
            <input  type="text"
                onChange={this.onChangeEmail}
                required
            />
            <br/>
            <label>
              <b>Username: </b>
            </label>
            <input  type="text"
                    onChange={this.onChangeUser}
                    required
            />
            <br/>
            <label >
              <b>Password: </b>
            </label>
            <input  type="password"
                    onChange={this.onChangePass}
                    required
            />
                {this.props.children}
            <br/>
            <label>
            <b>Confirm password</b>
            </label>
            <input  type="text"
                onChange={this.onChangeConf}
                required
            />
            <br/>

            <button className='btn' onClick={this.onSubmit}> Login </button>
          </form>
        </div>
      );
    }
  }

  onSubmit(e) {
    e.preventDefault();

    // var serverLocation = "http://localhost:4000/users/" + this.state.username;
        }

  render() {
    return (
        <div>
        {this.display()}
        </div>
    );
  }
}

export default Register;
