import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
        <div className="container" Style="width:30%">
        <div className="card">
            <div className="card-content" >
                <span className="card-title center"><strong>Sign up</strong></span>
                <form className="white" onSubmit={this.handleSubmit}>
                <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="waves-effect waves-light btn-small">Sign Up</button>
                    </div>
                </form>
            </div>
            <div className="card-action">
                <a></a>
                <NavLink to='/signin' className="right">Already signed up?</NavLink>
            </div>
        </div>
      </div>
    )
  }
}

export default SignUp