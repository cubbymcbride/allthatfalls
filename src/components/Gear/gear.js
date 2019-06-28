import React, { Component } from 'react'
import blackT from '../../images/ATFLogoBlackTransparent.png'
import './gear.css'

export default class Gear extends Component {
  render () {
    return <div style={styles.bg} className='background'>
      <h1 style={styles.words}>All That Falls uses:</h1>
      <div>
      <div style={styles.wrapper}>
        <div style={styles.card}></div>
        <div style={styles.card}></div>
        <div style={styles.card}></div>
        <div style={styles.card}></div>
      </div>
        <footer style={styles.footer}> Copyright All That Falls © 2019
      <br/>
      Website designed by Caleb McBride
      </footer>
      </div>
      
      
    </div>
  }
}

let styles = {
  bg: {
    backgroundColor: '#ffffff',
    height: '175vh',
    width: '100vw',
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between'
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

  card: {
    backgroundColor: '#000000',
    height: '400px',
    width: '650px',
    marginTop: '20px',
    marginBottom: '20px',
    fontFamily: 'Permanent Marker, cursive',
    color: 'white',
    border: '5px solid #696969',
    borderStyle: 'inset',
    
  },
  words: {
    fontFamily: 'Permanent Marker, cursive'
  },
}