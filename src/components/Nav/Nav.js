import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import whiteT from '../../images/ATFWhiteTransparent.png'



class Nav extends Component {

  logout = () => {
    axios.post('/auth/logout').then(
      () => {
      // console.log('logout')
      this.props.history.push('/login')}
    )
  }

  render () {
    return (
      <div>
      <nav style={styles.navbar}>
        <img style={styles.logo} src={whiteT} onClick={this.logout}/>
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

export default withRouter(Nav)

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
    border: '3px solid #696969',
    backgroundImage: 'linear-gradient(to bottom right, #000000, #696969)'
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