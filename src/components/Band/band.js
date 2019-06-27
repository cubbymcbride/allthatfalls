import React, { Component } from 'react'
import blackT from '../../images/ATFLogoBlackTransparent.png'
import './band.css'

export default class Band extends Component {
  render () {
    return <div style={styles.bg} className='background' >
      Murrrrrrrr! {this.props.name}
    </div>
  }
}

let styles = {
  bg: {
    backgroundColor: '#696969',
    height: '100vh',
    width: '100vw',
  }
}