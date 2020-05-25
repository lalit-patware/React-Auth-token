import React, { Component } from 'react'
import {Link, Redirect } from 'react-router-dom';


class LogoutPage extends Component {
  constructor(props){
    super(props)
      localStorage.removeItem("token")
    
  }
  render() {
    return (
      <div>
        <h1>You have logout</h1>
        <Link to="/login" >Login</Link>
      </div>
    )
  }
}

export default LogoutPage
