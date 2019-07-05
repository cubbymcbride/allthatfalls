import React, { Component } from 'react'

export default class UpdatePost extends Component {
    constructor(){
        super();

        this.state = {
            user_id: '',
            title: '',
            content: '',
            img: '' ,
        }

    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        let updatedPost = {...this.props.post, ...this.state}
        this.props.updatePost(updatedPost)
        this.props.toggleEdit()
    }

    render (){
        return(
            <div>
                <input style={styles.border}
                type='text'
                placeholder='Title'
                name='title'
                onChange={this.handleInput}
                value={this.state.name}></input>
                <br/>
                <input style={styles.border}
                type='text'
                placeholder='Content'
                name='content'
                onChange={this.handleInput}
                value={this.state.name}></input>
                <br/>
                <input style={styles.border}
                type='text'
                placeholder='Image Url'
                name='img'
                onChange={this.handleInput}
                value={this.state.img}></input>
                <br/>
                <button style={styles.button} onClick={() => this.handleClick()}>Save</button>
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