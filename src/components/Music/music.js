import React, { Component } from 'react'
import blackT from '../../images/ATFLogoBlackTransparent.png'
import './music.css'


export default class Music extends Component {
  render () {
    return <div style={styles.bg} className='background'>
      Seriously this sucks! {this.props.name}
    </div>
  }
}

let styles = {
  bg: {
    backgroundColor: '#ffffff',
    height: '100vh',
    width: '100vw'

  }
}