import axios from 'axios'

const GET_ADMIN = 'GET_ADMIN'
const GET_ADMIN_FULFILLED = 'GET_ADMIN_FULFILLED'

const LOGIN_ADMIN = 'LOGIN_ADMIN'
const LOGIN_ADMIN_FULFILLED = 'LOGIN_ADMIN_FULFILLED'

const LOGOUT_ADMIN = 'LOGOUT_ADMIN'
const LOGOUT_ADMIN_FULFILLED = 'LOGOUT_ADMIN_FULFILLED'

const initialState = {
    data: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ADMIN_FULFILLED:
           return { ...state, data: action.payload.data } 

        case LOGIN_ADMIN_FULFILLED:
            return { ...state, data: action.payload.data }

        case LOGOUT_ADMIN_FULFILLED:
                return { ...state, data: null }
        default:
            return state
    }
}

export function getADMIN() {
    return {
        type: GET_ADMIN,
        payload: axios.get('/auth/currentAdmin')
    }
}

export function login(loginInfo) {
    return {
        type: LOGIN_ADMIN,
        payload: axios.post('/auth/login', loginInfo)
    }
}

export function logout() {
    return {
        type: LOGOUT_ADMIN,
        payload: axios.get('/auth/logout')
    }
}