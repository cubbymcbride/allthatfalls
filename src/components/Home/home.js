import React from 'react'
import { connect } from 'react-redux'
import './home.css'
import Posts from '../Posts/posts'
import blackT from '../../images/ATFLogoBlackTransparent.png'



function Home(props) {
    let { post } = props
    return (
        <div style={styles.bg} className='background'>
            {post && <div>
                <h1>{post.title}</h1>
                <p>{post.author}</p>
                <hr/>
                <p>{post.content}</p>
                
            </div>}
              
        </div>
    )
  }

let mapStateToProps = state => {
  let { selected: post } = state.posts
  console.log(1111111, state)
  return { post }
}

export default connect(mapStateToProps)(Home)

let styles = {
  bg: {
    backgroundColor: '#ffffff',
    height: '100vh',
    width: '100vw',
  }
}