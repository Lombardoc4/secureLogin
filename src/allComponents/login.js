import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
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

            <button  onClick={this.onSubmit}> Login </button>
          </form>
        </div>
      );
    }
  }

  onSubmit(e) {
    e.preventDefault();

    var serverLocation = "http://localhost:4000/users/" + this.state.username;
        }

  render() {
    return (
        <div>
        {this.display()}
        </div>
    );
  }
}

export default Login;
