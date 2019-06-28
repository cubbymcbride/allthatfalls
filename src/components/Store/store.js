import React, { Component } from 'react'
import blackT from '../../images/ATFLogoBlackTransparent.png'
import './store.css'

export default class Store extends Component {
  render () {
    return <div style={styles.bg} className='background'>
      <div style={styles.words}> STORE COMING SOON </div>

      <footer style={styles.footer}> Copyright All That Falls © 2019
      <br/>
      Website designed by Caleb McBride
      </footer>
    </div>
  }
}

let styles = {
  bg: {
    backgroundColor: '#ffffff',
    height: '100vh',
    width: '100vw'

  },

  footer: {
    width: '100vw',
    height: '50px',
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: 'Black',
    color: 'white',
  },
  words: {
    fontFamily: 'Permanent Marker, cursive',
    fontSize: '55px'
  },
}