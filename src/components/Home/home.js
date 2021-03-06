import React from 'react'
import './home.css'
import Posts from '../Posts/posts'
import Post from '../Post/post'



function Home() {

    return (
      <div>
      <div style={styles.bg} className='background'>
      <h1 style={styles.words}>ATF FEED</h1>
      <div style={styles.card}>
        <Posts style={styles.center}/>
        
      </div>
      
      <footer style={styles.footer}> Copyright All That Falls © 2019
      <br/>
    
      Website designed by Caleb McBride
      </footer>  
        </div>      
      </div>
    )
  }

export default Home

let styles = {
  bg: {
    backgroundColor: '#ffffff',
    width: '100%',
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
    width: '750px',
    marginTop: '20px',
    marginBottom: '100px',
    paddingBottom: '20px',
    fontFamily: 'Permanent Marker, cursive',
    color: 'white',
    border: '5px solid #696969',
    borderStyle: 'inset',
    overflowY: 'auto'
  },
  words: {
    fontFamily: 'Permanent Marker, cursive'
  },
  center: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  }
}