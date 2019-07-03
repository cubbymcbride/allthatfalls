import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './music.css'


export default class Music extends Component {
  render () {
    return <div style={styles.bg} className='background'>
      <h1 style={styles.words}>DISCOGRAPHY</h1>
      <div>

        <div style={styles.card}>
            <h2>Call Us Failures</h2>
            <img src={'https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Photos/CUF+Cover.jpg'} style={styles.pic}/>
            <h3>1. Walking To California</h3>
            <h4 style={styles.spacing}>Key Lyric</h4>
            <h2 style={styles.spacing}>"In my case California, I'll get there on my own"</h2>
            <ReactPlayer url='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Walking+To+California.wav' height="75px" width="" controls/>
            <h3>2. Rumors</h3>
            <h4 style={styles.spacing}>Key Lyric</h4>
            <h2 style={styles.spacing}>"I heard a rumor the other day that you slept with a guy that I hate"</h2>
            <ReactPlayer url='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Rumors.wav' height="75px" width="" controls/>
            <h3>3. Average American Day</h3>
            <h4 style={styles.spacing}>Key Lyric</h4>
            <h2 style={styles.spacing}>"Somehow it's all gonna work out"</h2>
            <ReactPlayer url='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Average+American+Day.wav' height="75px" width="" controls/>
            <h3>4. Shattered</h3>
            <h4 style={styles.spacing}>Key Lyric</h4>
            <h2 style={styles.spacing}>"These city lights..."</h2>
            <ReactPlayer url='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Shattered.wav' height="75px" width="" controls/>
            <h3>5. Out Of This World Girl</h3>
            <h4 style={styles.spacing}>Key Lyric</h4>
            <h2 style={styles.spacing}>"There's never been a girl like you"</h2>
            <ReactPlayer url='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Out+Of+This+World+Gorl.wav' height="75px" width="" controls/>
            <h3>6. Pirate Song</h3>
            <h4 style={styles.spacing}>Key Lyric</h4>
            <h2 style={styles.spacing}>"YOHO!"</h2>
            <ReactPlayer url='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Pirate+Song.wav' height="75px" width="" controls/>
            <h3>7. Bonnie + Clyde</h3>
            <h4 style={styles.spacing}>Key Lyric</h4>
            <h2 style={styles.spacing}>"Take my hand and follow me"</h2>
            <ReactPlayer url='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Bonnie+And+Clyde+Master.wav' height="75px" width="" controls/>
            <h3>8. Choke on This!</h3>
            <h4 style={styles.spacing}>Key Lyric</h4>
            <h2 style={styles.spacing}>"Choke on the words that you used to slit my throat"</h2>
            <ReactPlayer url='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Choke+On+This+Master.wav' height="75px" width="" controls/>
            <h3>9. All In/All Out</h3>
            <h4 style={styles.spacing}>Key Lyric</h4>
            <h2 style={styles.spacing}>"Why didn't I think to tell you a different lie"</h2>
            <ReactPlayer url='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/All+In+All+Out.wav' height="75px" width="" controls/>
            <h3>10. Don't Let Them Bring You Down!</h3>
            <h4 style={styles.spacing}>Key Lyric</h4>
            <h2 style={styles.spacing}>"You can call us failures, hate our music, but you'll never stop us now"</h2>
            <ReactPlayer url="https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Don't+Let+Them+Bring+You+Down.wav" height="75px" width="" controls/>
            <br/>
            All That Falls © 2018
            <br/>
            Released July 12th, 2018
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
    height: '450vh',
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
    height: '405vh',
    width: '775px',
    marginTop: '20px',
    marginBottom: '20px',
    fontFamily: 'Permanent Marker, cursive',
    color: 'white',
    border: '5px solid #696969',
    borderStyle: 'inset',
    alignItems: "center",
    backgroundImage: 'linear-gradient(to bottom right, #000000, #696969)'
  },
  words: {
    fontFamily: 'Permanent Marker, cursive',
    
  },
  spacing: {
    margin: 0,
    padding: 0
  },

  pic: {
    height: '300px',
    width: '300px'
  }
  
}