
  import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOAD_USER,
    AUTH_ERROR
  } from '../actions/index'
  

const initialState = {
    token: localStorage.getItem('token'),
    isLoggedIn: false,
    errors: {}
}

const loginReducer = (state = initialState, action) =>{
    const { type, payload } = action;
    switch(type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                isLoggedIn: true
            }
        case LOGIN_SUCCESS:
            localStorage.getItem('token')
            return {
                ...state,
                isLoggedIn: true
            }
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                isLoggedIn: false,
                error: payload

            }
        default:
            return state;
    }
}

export default loginReducer;