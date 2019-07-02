import React, { Component } from 'react'
import './band.css'

export default class Band extends Component {
  render () {
    return <div>
    <div style={styles.bg} className='background'>
    <h1 style={styles.words}>All That Falls is:</h1>
    <div style={styles.card}>
      <h1 style={styles.spacing}>Bryant Wilson</h1>
      <h2 style={styles.spacing}>Lead Vocals + Rhythm Guitar</h2>
      <img src='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Photos/Bryant.jpg' style={styles.photo} />
    </div>
    
    <div style={styles.card}>
      <h1 style={styles.spacing}>Jacob "Chuck" McBride</h1>
      <h2 style={styles.spacing}>Lead Guitar + Backing Vocals</h2>
      <img src='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Photos/Chuck.jpg' style={styles.photo} />
    </div>

    <div style={styles.card}>
      <h1 style={styles.spacing}>Enrique "Ricky" Avila</h1>
      <h2 style={styles.spacing}>Drums + Backing Vocals</h2>
      <img src='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Photos/Rick.jpg' style={styles.photo} />
    </div>

    <div style={styles.card}>
      <h1 style={styles.spacing}>Caleb "Cubby" McBride</h1>
      <h2 style={styles.spacing}>Bass Guitar + Dirty Vocals</h2>
      <img src='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Photos/cub.jpg' style={styles.photo} />

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
    height: '500vh',
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
    marginBottom: '20px',
    fontFamily: 'Permanent Marker, cursive',
    color: 'white',
    border: '5px solid #696969',
    borderStyle: 'inset',
    backgroundImage: 'linear-gradient(to bottom right, #000000, #696969)'
  },

  words: {
    fontFamily: 'Permanent Marker, cursive',
    padding: 0,
    margin: 0
  },

  spacing: {
    padding: 0,
    margin: 0
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
  photo: {
    width: '250px',
    height: '350px',
    border: '5px inset #696969',
  }
}