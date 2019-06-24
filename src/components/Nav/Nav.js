import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render () {
    return (
      <div className='navbar'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/band">Band</Link>
        <Link to="/music">Music</Link>
        <Link to="/gear">Gear</Link>
        <Link to="/store">Store</Link>
      </nav>
    </div>
    ) 
  }
}