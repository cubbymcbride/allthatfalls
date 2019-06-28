import React, { Component } from 'react'
import blackT from '../../images/ATFLogoBlackTransparent.png'
import './store.css'

export default class Store extends Component {
  render () {
    return <div style={styles.bg} className='background'>
      Sike! {this.props.name}
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