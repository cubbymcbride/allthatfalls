import React, { Component } from 'react'
import { Link } from "react-router-dom";
import whiteT from '../../images/ATFWhiteTransparent.png'

export default class Nav extends Component {
  render () {
    return (
      <div>
      <nav style={styles.navbar}>
        <img style={styles.logo} src={whiteT}/>
        <div>
        <Link style={styles.word} to="/">Home</Link>
        <Link style={styles.word} to="/band">Band</Link>
        <Link style={styles.word} to="/music">Music</Link>
        <Link style={styles.word} to="/gear">Gear</Link>
        <Link style={styles.word} to="/store">Store</Link>
        </div>
      </nav>
      </div>
    ) 
  }
}

let styles = {
  logo: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 80,
  },
  navbar: {
    backgroundColor: "black",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    height: '10vh',
    width: '100vw',  
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  word: {
    textDecoration: "none",
    padding: 25, 
    paddingLeft: 0,
    fontSize: 23,
    color: 'white',
    fontFamily: 'Permanent Marker, cursive',
  }
}