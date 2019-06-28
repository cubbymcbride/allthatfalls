import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './login.css'

import { updateAdmin } from '../../redux/reducers/admin'

class Login extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target 
        this.setState({
            [name]: value
        })
    }

    async login() {
        const { email, password } = this.state;
        console.log('from login component', this.state)
        await axios
          .post("/auth/login", { email, password })
          .then(res => {
            console.log('res.data', res.data)
            this.props.updateAdmin(res.data);
          })
          .then(res => {
            this.props.history.push("/");
          })
          .catch(err => {
            alert("Please use a valid username and password");
          });
     
        this.setState({
            email: '',
            password: ''
        });
      }

      async register() {
        const { email, password } = this.state;
        console.log('from login component', this.state)
        await axios
          .post("/auth/register", { email, password })
          .then(res => {
            this.props.updateAdmin(res.data);
          })
          .then(res => {
            this.props.history.push("/");
          })
          .catch(err => {
            alert("Please use a valid username and password");
          });
     
        this.setState({
            email: '',
            password: '',
         });
      }

    render() {
      console.log(this.props)
        return (
            <div style={styles.bg} className='background'>
              <div style={styles.loginBox}>
                <h2 style={styles.font}>Admin Login</h2>
                <p1 style={styles.font}>Email</p1>
                <br/>
                <input style={styles.border}
                    name="email" 
                    type="text" 
                    placeholder="Email" 
                    onChange={this.handleChange}/>
                    <br/>
                <p1 style={styles.font}>Password</p1>
                <br/>
                <input style={styles.border}
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    onChange={this.handleChange}/>
                <br/>
                <br/>
                <button style={styles.button} onClick={() => this.login()}>Login</button>
                <br/>
                <br/>
                <button style={styles.button} onClick={() => this.register()} >Register</button>
                </div>
            </div>
          
        )
    }
}

function mapStateToProps(state){
    return {
      email: state.admin.email,
      user_id: state.admin.user_id
    }
}

export default connect( mapStateToProps, { updateAdmin })(Login)






// css in js
let styles = {
  bg: {
    backgroundColor: '#ffffff',
    height: '100vh',
    width: '100vw'
  },
  button: {
  backgroundColor: '#000000',
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
  font: {
    fontFamily: 'Permanent Marker, cursive'
  },
  border: {
  border: '3px solid black',
  borderRadius: '4px'
  },

  loginBox: {
    height: '400px',
    width: '400px',
    paddingTop: '20px',
    marginTop: '40px',
    flexDirection: 'column',
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#696969',
    border: '5px solid black',
    borderRadius: '25px'
  }
}