import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import './Nav.css'
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
      <div class='socialbar'>
      <br/>
        <a href='https://www.facebook.com/AllThatFallsID/' target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>
        </a>
        <br/>
        <br/>
        <a href='https://www.instagram.com/allthatfallsid' target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/ios/50/000000/instagram-new-filled.png"/>
        </a>
        <br/>
        <br/>
        <a href='https://music.apple.com/us/artist/all-that-falls/1391484079' target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/ios/50/000000/itunes.png"/>
        </a>
        <br/>
        <br/>
        <a href='https://open.spotify.com/artist/4z2lutYXPIeffrdxTLmOHD' target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/ios-filled/50/000000/spotify.png"/>
        </a>
        <br/>
        <br/>
        <a href='https://play.google.com/store/music/artist?id=Aptsx6zcqodrurtwrdkymggl6gi' target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/ios-filled/50/000000/google-play.png"/>
        </a>
      </div>
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