import React, {Component} from 'react'
import axios from 'axios'
import Post from '../Post/post'
import {Link} from 'react-router-dom'
import UpdatePost from '../UpdatePost/updatePost'

export default class Posts extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            title: '',
            content: '',
            img: '' ,

        }
    }

    async componentDidMount(){
     await axios.get('/api/post').then(res => {
         console.log(777777777, res.data)
            this.setState({
                posts: res.data
            })
        }).catch(err => {
            console.log('error fetching posts from endpoint', err)
        })
    }

    toggleEdit = () => {
        this.setState({
            // posts: this.state.posts
        })
    }

    deletePost = id => {
        axios.delete(`/api/post/${id}`).then(res => {
            this.setState({
                posts: res.data
            })
        }).catch(err => {
            console.log('Did not delete error:', err)
        })
    }

    editPost = () => {
        axios.put(`/api/post/${this.props.match.params.id}`, {
            title: this.state.title,
            content: this.state.content,
            img: this.state.img
        }).then(res => {
            alert('Edit Success')
        }).catch(err => {
            alert('Edit Failure')
            console.log('Problem editing post Error:', err)
        })
    }

    render(){
        console.log(5555555, this.state.posts)
        return (
            <div>
                {this.state.posts.map((post)=> {
                    return ( 
                    <div>
                    <div style={styles.border} key={post.post_id}>
                        <div>
                          <h2 style={styles.spacing}>{post.title}</h2>
                        <p style={styles.spacing}>{post.content}</p>  
                          <br/>  
                         <img src={post.img} style={styles.pic}/>
                        </div>
                        {/* <UpdatePost
                        toggleEdit={this.toggleEdit}
                        editPost={this.props.editPost} />
                        */}
                       
                        {this.state.posts ?
                        // <button style={styles.button} onClick={() => {<UpdatePost/>}}>Edit</button>
                        <Link to="/update">Edit</Link>
                        :
                        <button style={styles.button} onClick={this.toggleEdit}>Cancel</button>
                        }
                        
                        <button style={styles.button} onClick={() => this.deletePost(post.post_id)}>Delete</button> 

                    </div>
                        <Post posts={this.state.posts}/>
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
        height:'400px',
        width: '400px',
        border: '5px inset white',
        margin: 0,
        // transition: '1s'
    },
    // pic:hover {
    //     height: '500px',
    //     width: '500px'
    // },
    spacing: {
        padding: 0,
        margin: 0
      },
    button: {
        backgroundColor: 'black',
        border: 'none',
        color: 'white',
        padding: '15px 15px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '20px',
        fontFamily: 'Permanent Marker, cursive',
        borderRadius: '15px'
        },
}