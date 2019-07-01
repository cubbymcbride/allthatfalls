import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './music.css'
import AWS from 'aws-sdk'



export default class Music extends Component {
  render () {
    return <div style={styles.bg} className='background'>
      <h1 style={styles.words}>DISCOGRAPHY</h1>
      <div>

        <div style={styles.card}>
            Call Us Failures
            <br/>
            All That Falls © 2018
            <br/>
            Released July 12th, 2018
            <ReactPlayer url='' playing/>
            <ReactPlayer url='' playing/>
            <ReactPlayer url='' playing/>
            <ReactPlayer url='' playing/>
            <ReactPlayer url='' playing/>
            <ReactPlayer url='' playing/>
            <ReactPlayer url='' playing/>
            <ReactPlayer url='' playing/>
            <ReactPlayer url='' playing/>
            <ReactPlayer url='' playing/>
        </div>
        
      </div>
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
    width: '100vw',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
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
    width: '750px',
    marginTop: '20px',
    marginBottom: '20px',
    fontFamily: 'Permanent Marker, cursive',
    color: 'white',
    border: '5px solid #696969',
    borderStyle: 'inset'
  },
  words: {
    fontFamily: 'Permanent Marker, cursive',
    margin: 0,
    padding: 0
  },
  
}