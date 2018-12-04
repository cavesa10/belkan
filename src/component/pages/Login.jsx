import React, { Component } from 'react'
import { login } from '../helpers/Auth'

export default class Login extends Component {
  constructor(...props){
    super(...props)

    this.state = {loginMessage: null}

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(e){
    e.preventDefault()
    login(this.email.value, this.password.value)
      .catch( error => this.setState( this.setErrorMessage('Usario o Password Incorrecto') ) )
  }
  
  setErrorMessage(error){
    return { loginMessage: error }
  }


  render() {
    return (
      <article className="Main-container">
        <h1>Sección Login</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input type="email" placeholder="Email" ref={ email => this.email = email } />
          <input type="password" placeholder="Password" ref={ password => this.password = password } />
          {
            this.state.loginMessage && 
            <div className="error">
              ERROR: {this.state.loginMessage}
            </div>
          }
          <input type="submit" value="Login"/>
        </form>
      </article>
    )
  }
}