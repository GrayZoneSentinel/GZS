import axios from 'axios';

import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from './types';

import { USER_SERVER } from '../Components/Utils/misc';

export function registerUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
    .then(response => response.data);

    return {
        // Create the type in Actions/types.js
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
    .then(response => response.data);

    return {
        // Create the type in Actions/types.js
        type: LOGIN_USER,
        payload: request
    }
}

export function auth() {
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data);

    return {
        // Create the type in Actions/types.js
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser(){
    const request = axios.get(`${USER_SERVER}/logout`)
    .then( response => response.data);
    return {
        type: LOGOUT_USER,
        payload: request
    }
}