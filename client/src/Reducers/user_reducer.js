// Login users
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from '../Actions/types';

export default function(state={}, action) {
    switch(action.type){
        case REGISTER_USER:
            return { ...state, register: action.payload}
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload}
        case AUTH_USER:
            // Get the data of the user from the server (Auth user)
            return { ...state, userData: action.payload}
        default: 
            return state;
    }
}