import React, { Children, Component } from 'react'
import './signup.css';
export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm: ''
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.password == this.state.connfirm){
      this.setState({ email: '', password: '', confirm:'' });
alert("you are logged in");
    }else{
      alert("password did not matched.");
    }
  }
  render() {
    return (
      <div className='signup'>
        <form onSubmit={this.handleSubmit}>
          <center>
            <h1>Sign Up</h1>
            <input
              placeholder="Email"
              type="email" name="email"
              className="email"
              value={this.state.email}
              onChange={this.handleChange} required />

            <input
              placeholder='Password'
              type="password"
              name="password"
              className="password"
              value={this.state.password}
              onChange={this.handleChange} required />
            <input
              placeholder='Confirm Password'
              type="password"
              name="confirm"
              className="password"
              value={this.state.confirm}
              onChange={this.handleChange} required />
          </center>

          <input type="submit" value="Sign Up" className='submit' />
        </form>
      
          
      </div>

    )
  }
}
