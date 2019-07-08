import React from 'react'

export default function SocialSideBar(){
    return(
        <div>
    <div style={styles.socialBar}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
        </div>
    )
}

let styles = {
    socialBar: {
      width: '50px',
      height: '400px',
      backgroundImage: '#696969',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }