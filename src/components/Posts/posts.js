import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Post from '../Post/post'
import PostsModal from '../Posts/postsModal'
import { ButtonToolbar } from 'react-bootstrap';
import './posts.css'

class Posts extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            title: '',
            content: '',
            img: '' ,
            toggle: false,
            update: false
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
            toggle: !this.state.toggle
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

        

    render(){
        let flipUpdate = () => {
            // console.log('flip update invoked', this.state)
            this.setState({
              update: !this.state.update
            })};
       
          let addModalClose = () => this.setState({addModalShow: false})
          let postFinished = () =>
          {
            this.setState({addModalShow: false})
            this.props.history.push("/");
          }
          console.log(88888888, this.props)
          
        return (
            <div>
                {this.state.posts.map((post)=> {
                    return ( 
                        
                        <div>
                            <ButtonToolbar style={styles.center} />
                            <div style={styles.border} key={post.post_id}>
                                <div>
                                    <h2 style={styles.spacing}>{post.title}</h2>
                                    <p style={styles.spacing}>{post.content}</p>  
                                    <br/>  
                                    <img src={post.img} style={styles.pic}/>
                                </div>
                                <br/>
                            </div>

                {(this.props.user_id) ? (
                    <div>
                        <button  style={styles.button} onClick={() => this.setState({addModalShow: true})}>Edit</button>

                        <PostsModal className="openmodal"
                        show={this.state.addModalShow} onHide={addModalClose} logFinished={postFinished} userId={post.user_id} title={post.title} content={post.content} img={post.img} flipUpdate={flipUpdate} postId={post.post_id}/>
                        
                        
                        
                        
                        <button style={styles.button} onClick={() => this.deletePost(post.post_id)}>Delete</button> 

                    <div>
                        <Post posts={this.state.posts} style={styles.center}/> 
                    </div>
                    </div>
                    ) : (null)
                }
                        </div>
                    )
                    })
                }
                       
                        
               
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user_id: state.admin.user_id
    }
}

export default connect(mapStateToProps) (Posts)


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
    },
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
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
}