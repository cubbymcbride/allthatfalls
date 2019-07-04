import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Post extends Component {
    constructor(){
        super();

        this.state = {
            user_id: '',
            title: '',
            content: '',
            img: ''   
        }

    }

    componentDidMount(){
        this.setState({
            user_id: this.props.user_id,

        })
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit() {
        const {title, content, img, user_id} = this.state
        axios.post("/api/post", {title, content, img, user_id})
        .then(res => {
            console.log('you did it dumbass', res.data)
        })
    }

    render (){
        console.log(111111, this.props, this.state)
        return(
            <div>
                <input
                type='text'
                placeholder='Title'
                name='title'
                onChange={this.handleInput}
                value={this.state.name}></input>
                <br/>
                <input
                type='text'
                placeholder='Content'
                name='content'
                onChange={this.handleInput}
                value={this.state.name}></input>
                <br/>
                <input
                type='text'
                placeholder='Image Url'
                name='img'
                onChange={this.handleInput}
                value={this.state.img}></input>
                <br/>
                <button onClick={() => this.submit()}>Post</button>
            </div>

        )     
    }
}

function mapStateToProps(state){
    return{
        user_id: state.admin.user_id
    }
}

export default connect(
    mapStateToProps

)(Post)