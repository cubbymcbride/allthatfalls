import React, { Component } from 'react'
import blackT from '../../images/ATFLogoBlackTransparent.png'


export default class Login extends Component {
  render () {
    return <div style={styles.bg}>
      You Won't! {this.props.name}
    </div>
  }
}

let styles = {
  bg: {
    backgroundColor: '#696969',
    height: '100vh',
    width: '100vw'

  }
}