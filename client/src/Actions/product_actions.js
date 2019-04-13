import axios from 'axios';

import { 
    GET_PRODUCTS_BY_SELL, 
    GET_PRODUCTS_BY_ARRIVAL, 
    GET_BRANDS,
    ADD_BRAND,
    GET_WOODS,
    ADD_WOOD,
    GET_PRODUCTS_TO_SHOP,
    ADD_PRODUCT,
    CLEAR_PRODUCT,
    GET_PRODUCT_DETAIL,
    CLEAR_PRODUCT_DETAIL
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


// ===================================
//        BRAND MANAGEMENT
// ===================================
export function addBrand(dataToSubmit, existingBrands){
    const request = axios
    .post(`${PRODUCT_SERVER}/brand`, dataToSubmit)
    .then(response => {
        let brands = [
            ...existingBrands,
            response.data.brand
        ];
        return {
            success: response.data.success,
            brands
        }
    });

    return{
        type: ADD_BRAND,
        payload: request
    }
}

// ===================================
//        WOOD MANAGEMENT
// ===================================
export function addWood(dataToSubmit, existingWoods){
    const request = axios
    .post(`${PRODUCT_SERVER}/wood`, dataToSubmit)
    .then(response => {
        let woods = [
            ...existingWoods,
            response.data.wood
        ];
        return {
            success: response.data.success,
            woods
        }
    });

    return{
        type: ADD_WOOD,
        payload: request
    }
}

// ===================================
//           PRODUCT DETAIL
// ===================================
export function getProductDetail(id){
    const request = axios
    .get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
    .then(response => {
        return response.data[0];
    });
    return{
        type: GET_PRODUCT_DETAIL,
        payload: request
    }
}

export function clearProductDetail() {
    return{
        type: CLEAR_PRODUCT_DETAIL,
        payload: ''
    }
}
