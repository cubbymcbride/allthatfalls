import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export default class Posts extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
     await   axios.get('/api/post').then(res => {
            this.setState({
                posts: res.data
            })
            console.log(33333, res.data, this.state)
        }).catch(err => {
            console.log('error fetching posts from endpoint', err)
        })
    }

    deletePost = id => {
        axios.delete(`/api/posts/${id}`).then(res => {
            this.setState({
                posts: res.data
            })
        }).catch(err => {
            console.log('Did not delete error:', err)
        })
    }

    

    render(){
        return (
            <div>
                {this.state.posts.map((post)=> { 
                    return (
                    <div style={styles.border}>
                        <div key={post.id}>
                          <h2 style={styles.spacing}>{post.title}</h2>
                        <p style={styles.spacing}>{post.content}</p>  
                          <br/>  
                         <img src={post.img} style={styles.pic}/>
                        </div>
                    </div>
                )
                
                })}
            </div>

            
        )
    }
}


let styles = {
    border: {
        border: '5px inset white',
        margin: '10px'
    },
    pic: {
        height:'300px',
        width: '300px',
        border: '5px inset white'
    },
    spacing: {
        padding: 0,
        margin: 0
      },
}