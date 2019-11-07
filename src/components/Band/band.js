import React, { Component } from 'react'
import './band.css'

export default class Band extends Component {
  render () {
    return <div>
    <div style={styles.bg} className='background'>
    <h1 style={styles.words}>All That Falls is:</h1>
    
    <div style={styles.card}>
      <h1 style={styles.spacing}>Jacob "Chuck" McBride</h1>
      <h2 style={styles.spacing}>Lead Guitar + Backing Vocals</h2>
      <img src='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Photos/Chuck.jpg' style={styles.photo} />
      <h2>Bio</h2>
      <h5> <p>Jacob “Chuck” McBride is the lead guitarist and backing vocalist for All That Falls. Originally the guitarist and lead vocalist, Chuck has transitioned in to his new role with the addition of Bryant to the band. Trained in Punk, Jazz, Rock, and Blues, Chuck brings his diverse musical experiences to the writing process to deliver pop-punk hooks over blues and rock style solos.</p>
            <p>  Chuck alongside Cub is the band's main lyricist and composer for the music. His influences based heavily around girls, love and recently has evolved to darker subjects that mix with Cub’s lyrics. </p>
            <p>  “Music is the one thing that means the most to me. I love writing and composing along with pushing myself to create. I want to make music that I like and that the band likes and when other people like it and connect with it that creates something truly special.” - Jacob “Chuck” McBride</p>

            </h5>
    </div>

    <div style={styles.card2}>
      <h1 style={styles.spacing}>Enrique "Ricky" Avila</h1>
      <h2 style={styles.spacing}>Drums + Backing Vocals</h2>
      <img src='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Photos/Rick.jpg' style={styles.photo} />
      <h2>Bio</h2>
      <h5>
      <p>Enrique "Ricky" Avila is the unofficial favorite McBride Child and Drummer in All That Falls. He picked up the drums in the band after the departure of old drummer Tyler Andersen. Ricky came in sat down and filled in the hole like it wasn't even there truly becoming the backbone of the band. Ricky is a trained drummer in Pop-Punk, Rock, and Blues.</p>
      <p>Ricky boasts his greatest accomplishment is indeed parallel parking a train.</p>
      </h5>
    </div>

    <div style={styles.card}>
      <h1 style={styles.spacing}>Caleb "Cubby" McBride</h1>
      <h2 style={styles.spacing}>Bass Guitar + Dirty Vocals</h2>
      <img src='https://allthatfallsmusicbucket.s3-us-west-2.amazonaws.com/Photos/cub.jpg' style={styles.photo} />
      <h2>Bio</h2>
      <h5>
      <p>Caleb “Cubby” McBride is the bassist and dirty vocalist for All That Falls. Originally the rhythm guitarist and vocalist for the band he transferred over to bass when they couldn’t find a bassist. Cub’s passion for bass was ignited and the rest was history. Trained in Punk, Jazz, Rock, and Blues, Cub brings his diverse musical experiences to the writing process to deliver driving basslines and catchy solos.</p>
            <p>  Cub alongside Chuck is the band's main lyricist and composer for the music. His influences based heavily around darker subjects such as his battles with anxiety, depression, and self-worth. Cub believes that these topics need to be discussed openly and in a safe environment because of rising suicide rates from depression and anxiety. </p>
            <p>  “If I can make someone feel less alone, depressed, or anxious because they know that they aren’t the only person to experience how they are feeling then I will know I have succeeded as a musician.” - Caleb “Cubby” McBride</p>
</h5>
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
    height: '625vh',
    width: '100vw',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#000000',
    height: '26%',
    width: '750px',
    marginTop: '20px',
    marginBottom: '20px',
    fontFamily: 'Permanent Marker, cursive',
    color: 'white',
    border: '5px solid #696969',
    borderStyle: 'inset',
    backgroundImage: 'linear-gradient(to bottom right, #000000, #696969)'
  },

  words: {
    fontFamily: 'Permanent Marker, cursive',
    padding: 0,
    margin: 0
  },

  spacing: {
    padding: 0,
    margin: 0
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
  photo: {
    width: '250px',
    height: '350px',
    border: '5px inset white',
  },
  card2: {
    backgroundColor: '#000000',
    height: '20%',
    width: '750px',
    marginTop: '20px',
    marginBottom: '20px',
    fontFamily: 'Permanent Marker, cursive',
    color: 'white',
    border: '5px solid #696969',
    borderStyle: 'inset',
    backgroundImage: 'linear-gradient(to bottom right, #000000, #696969)'
  },
}