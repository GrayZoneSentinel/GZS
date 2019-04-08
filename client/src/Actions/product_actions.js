import axios from 'axios';

import { 
    GET_PRODUCTS_BY_SELL, 
    GET_PRODUCTS_BY_ARRIVAL, 
    GET_BRANDS, 
    GET_WOODS,
    GET_PRODUCTS_TO_SHOP
} from './types';

import { PRODUCT_SERVER } from '../Components/Utils/misc';

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
//        Get products to Shop
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
//        CATEGORIES  FILTERS
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