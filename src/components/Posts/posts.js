import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Post from '../Post/post'

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

               

            </div>
        )
    }
}