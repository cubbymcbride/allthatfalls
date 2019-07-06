import React, { Component } from 'react'
import axios from 'axios'

export default class UpdatePost extends Component {
    constructor(){
        super();

        this.state = {
            user_id: '',
            title: '',
            content: '',
            img: '' ,
            postId: ''
        }

    }

    componentDidMount(){
        this.setState({
        title: this.props.title,
        content: this.props.content,
        img: this.props.img,
        postId: this.props.postId,
        })
        
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editPost() {
        const { postId, title, content, img } = this.state
        axios.put(`/api/post/${postId}`, {
            postId, title, content, img
        }).then(res => {
            alert('Edit Success')
        })
    }

    render (){
        console.log(66666666, this.props, this.state)
        return(
            <div>
                <input style={styles.border}
                type='text'
                placeholder='Title'
                name='title'
                onChange={this.handleInput}
                value={this.state.title}></input>
                <br/>
                <input style={styles.border}
                type='text'
                placeholder='Content'
                name='content'
                onChange={this.handleInput}
                value={this.state.content}></input>
                <br/>
                <input style={styles.border}
                type='text'
                placeholder='Image Url'
                name='img'
                onChange={this.handleInput}
                value={this.state.img}></input>
                <br/>
                <button style={styles.button} onClick={() => this.editPost()}>Save</button>
            </div>

        )     
    }
}


let styles = {
    border: {
    border: '3px solid white',
    borderRadius: '4px',
    margin: '4px'
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