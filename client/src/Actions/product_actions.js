import axios from 'axios';

import { 
    GET_PRODUCTS_BY_SELL, 
    GET_PRODUCTS_BY_ARRIVAL, 
    GET_BRANDS, 
    GET_WOODS,
    GET_PRODUCTS_TO_SHOP,
    ADD_PRODUCT,
    CLEAR_PRODUCT
} from './types';

import { PRODUCT_SERVER } from '../Components/Utils/misc';


// ===================================
//        PRODUCT FILTERS
// ===================================
export function getProductsBySell(){
    // ?sortBy=sold&order=desc&limit=100
    const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then(response => response.data);

    return{
        type: GET_PRODUCTS_BY_SELL,
        payload: request
    }
}

export function getProductsByArrival(){
    // ?sortBy=sold&order=desc&limit=100
    const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data);

    return{
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}


// ===================================
//        PRODUCTS TO SHOP
// ===================================
export function getProductsToShop(skip, limit, filters=[], previousState=[]){
    const data = {
        skip,
        limit,
        filters
    }
    const request = axios
    .post(`${PRODUCT_SERVER}/shop`, data)
    .then(response => {
        // Load more products button functionality
        let newState = [
            ...previousState,
            ...response.data.articles
        ];
        return{
            size: response.data.size,
            // Load more products button functionality
                // articles: response.data.articles
            articles: newState
        }
    });
    return{
        type: GET_PRODUCTS_TO_SHOP,
        payload: request
    }
}


// ===================================
//        CATEGORY  FILTERS
// ===================================

export function getBrands(){
    const request = axios
    .get(`${PRODUCT_SERVER}/brands`)
    .then(response => response.data);

    return{
        type: GET_BRANDS,
        payload: request
    }
}

export function getWoods(){
    const request = axios
    .get(`${PRODUCT_SERVER}/woods`)
    .then(response => response.data);

    return{
        type: GET_WOODS,
        payload: request
    }
}


// ===================================
//        PRODUCT ADDINGS
// ===================================
export function addProduct(dataToSubmit) {
    const request = axios.post(`${PRODUCT_SERVER}/article`, dataToSubmit)
    .then(response => response.data);

    return {
        // Create the type in Actions/types.js
        type: ADD_PRODUCT,
        payload: request
    }
}

//  Clear State Once Added

export function clearProduct() {
    return {
        // Create the type in Actions/types.js
        type: CLEAR_PRODUCT,
        payload: ''
    }
}