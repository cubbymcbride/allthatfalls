import React, { Component } from 'react'
import blackT from '../../images/ATFLogoBlackTransparent.png'
import './gear.css'

export default class Gear extends Component {
  render () {
    return <div style={styles.bg} className='background'>
      Yeet! {this.props.name}
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