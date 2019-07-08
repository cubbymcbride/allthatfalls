import React, { Component } from 'react'
import './gear.css'

export default class Gear extends Component {
  render () {
    return <div style={styles.bg} className='background'>
      <h1 style={styles.words}>All That Falls uses:</h1>
      <div>
      <div style={styles.wrapper}>
        <div style={styles.card}>
        <h2>Bryant</h2>
        <h3 style={styles.left}>Guitar:
        <ul height='0px'>
          <li> G+L Tribute ASAT </li>
        </ul>
        </h3>
        <h3 style={styles.left}>Pedals:
        <ul height='0px'>
          <li> Ibanez TS9 TubeScreamer </li>
          <li> Boss DS-1 Distortion </li>
          <li> MXR Analog Chorus </li>
          <li> Boss FS-5U</li>
          <li> Boss DD-20 Giga-Delay</li>
          <li> Boss PH-3 Phase Shifter</li>
          <li> Boss RC-1 Loop Station</li>
        </ul>
        </h3>
        <h3 style={styles.left}>Amp:
        <ul height='0px'>
          <li>Orange Crush 120H</li>
          <li>Bugera 2x12 cab</li>
        </ul>
        </h3>
        </div>
        </div>
        <div style={styles.wrapper}>
        <div style={styles.card}>
        <h2>Chuck</h2>
        <h3 style={styles.left}>Guitar:
        <ul height='0px'>
          <li> Epiphone Les Paul Custom Silverburst</li>
        </ul>
        </h3>
        <h3 style={styles.left}>Pedals:
        <ul height='0px'>
          <li> DigiTech Whammy Pedal </li>
          <li> Ibanez WD7 Weeping Demon Wah </li>
          <li> Ibanez DS7 Distortion </li>
          <li> Ibanez TS7 Overdrive</li>
          <li> Ibanez DE7 Delay/Echo</li>
          <li> Boss PH-3 Phase Shifter</li>
          <li> Boss FL-2 Flanger</li>
          <li> TC Electronic Polytune</li>
        </ul>
        </h3>
        <h3 style={styles.left}>Amp:
        <ul height='0px'>
          <li> Marshall MG100HGFX 100W Guitar Amp /w Marshall Cab</li>
        </ul>
        </h3>
        </div>
        </div>
        <br/>
        <div style={styles.wrapper}>
        <div style={styles.card}>
        <h2>Ricky</h2>
        <h3 style={styles.left}>Drums: Crush Drums</h3>
        <h3 style={styles.left}>Cymbals: Zildjian Cymbals</h3>
        <h3 style={styles.left}>Hardware: Tama</h3>
        </div>
        </div>
        <br/>
        <div style={styles.wrapper}>
        <div style={styles.card}>
        <h2>Cub</h2>
        <h3 style={styles.left}>Bass:
        <ul height='0px'>
          <li> Squire PJ Bass Special w/ Basslines SPB Quarter Pup</li>
          <li> Squire V Vintage Modified Jazz Bass</li>
        </ul>
        </h3>
        <h3 style={styles.left}>Pedals:
        <ul height='0px'>
          <li> Ernie Ball Volume Pedal JR</li>
          <li> Dunlop 105Q Cry Baby Bass Wah</li>
          <li> Korg Pitch Black Mini 2 Tuner</li>
          <li> Fender Full Moon Distortion</li>
          <li> TC Electronic MojoMojo OD</li>
        </ul>
        </h3>
        <h3 style={styles.left}>Amp:
        <ul height='0px'>
          <li> Fender Rumble 200</li>
        </ul>
        </h3>
        </div>
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
    height: '370vh',
    width: '100vw',
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignitems: 'center'
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
    height: '500px',
    width: '650px',
    marginTop: '20px',
    marginBottom: '20px',
    fontFamily: 'Permanent Marker, cursive',
    color: 'white',
    border: '5px solid #696969',
    borderStyle: 'inset',
    backgroundImage: 'linear-gradient(to bottom right, #000000, #696969)'
  },
  words: {
    fontFamily: 'Permanent Marker, cursive'
  },

  left: {
    display: 'flex',
    alignItems: 'flex-start'
  }
}