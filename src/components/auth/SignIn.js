import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
        <div className="card medium">
            <div className="card-content" >
                <span className="card-title center"><strong>Sign in</strong></span>
                <form className="white" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="waves-effect waves-light btn-small">Login</button>
                    </div>
                </form>
            </div>
            <div className="card-action">
                <NavLink to='/signup' className="left">Did not sign up?</NavLink>
                <Link to='#' className="right">Forgot password?</Link>
            </div>
        </div>
      </div>
    )
  }
}

export default SignIn