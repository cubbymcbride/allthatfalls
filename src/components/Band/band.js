import React, { Component } from 'react'
import blackT from '../../images/ATFLogoBlackTransparent.png'
import './band.css'

export default class Band extends Component {
  render () {
    return <div>
    <div style={styles.bg} className='background'>
    <h1 style={styles.words}>All That Falls is:</h1>
    <div style={styles.card}>
      <h1>Bryant Wilson</h1>
      <h2>Lead Vocals + Rhythm Guitar</h2>
    </div>

    <div style={styles.card}>
      <h1>Jacob "Chuck" McBride</h1>
      <h2>Lead Guitar + Backing Vocals</h2>
    </div>

    <div style={styles.card}>
      <h1>Enrique "Ricky" Avila</h1>
      <h2>Drums + Backing Vocals</h2>
    </div>

    <div style={styles.card}>
      <h1>Caleb "Cubby" McBride</h1>
      <h2>Bass Guitar + Dirty Vocals</h2>

    </div>

    </div>
    </div>
  }
}

let styles = {
  bg: {
    backgroundColor: '#ffffff',
    height: '250vh',
    width: '100vw',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#000000',
    height: '700px',
    width: '750px',
    marginTop: '20px',
    fontFamily: 'Permanent Marker, cursive',
    color: 'white'
  },

  words: {
    fontFamily: 'Permanent Marker, cursive'
  }
}