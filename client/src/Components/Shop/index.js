import React, { Component } from 'react';
// Importing the PageTop from utils
import PageTop from '../Utils/page_top';
// import connection to redux to get the props of the PageTop
import { connect } from 'react-redux';
// import get the products: create in product_actions file
import { getBrands, getWoods, getProductsToShop } from '../../Actions/product_actions';
// the leftside collapsing checkboxes & radios
import CollapseCheckbox from '../Utils/collapseCheckbox';
import CollapseRadio from '../Utils/collapseRadio';
// Fixed categories
import { frets, price } from '../Utils/Form/fixed_categories';
// LoadmoreCards button 
import LoadmoreCards from './loadmoreCards';


class Shop extends Component {

    // Multiple selection in the same array
    state = {
        grid: '',
        limit: 6,
        skip: 0,
        filters: {
            brand: [],
            wood: [],
            fret: [],
            price: []
        }
    }

    // import connection to redux to get the props of the PageTop
    componentDidMount() {
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());
        // Products to Shop
        this.props.dispatch(getProductsToShop(
            this.state.skip,
            this.state.limit,
            this.state.filters
        ));
    }

    // Handle price filter
    handlePrice = (value) => {
        const data = price;
        let array = [];
        for(let key in data){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }
        return array;
    }

    // handleFilters functionality from the CollapseCheckbox
    handleFilters = (filters, category) => {
        // console.log(filters);
        const newFilters = {...this.state.filters};
        newFilters[category] = filters;

        // Handle the filtered price
        if(category === "price") {
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues
        }

        // Handle results deriving from the applied filters
        this.showFilteredResults(newFilters)

        this.setState({
            filters: newFilters
        })
    }

    // Handle results deriving from the applied filters
    showFilteredResults  = (filters) => {
        this.props.dispatch(getProductsToShop(
            0,
            this.state.limit,
            filters
        ))
        .then(() => {
            this.setState({
                skip: 0
            })
        })
    }

    render(){
        // import connection to redux to get the props of the PageTop
        // console.log(this.state.filters);
        const products = this.props.products;

        return(
            <div>
                <PageTop
                    title = "Browse products"
                />    
                <div className = "container">
                    <div className = "shop_wrapper">
                        <div className = "left">
                            <CollapseCheckbox
                                initState = {true}
                                title = "Brands"
                                list = {products.brands}
                                handleFilters = {(filters) => this.handleFilters(filters, 'brand')}
                            />
                            {/* {console.log(products.brands)} */}
                            <CollapseCheckbox
                                initState = {false}
                                title = "Woods"
                                list = {products.woods}
                                handleFilters = {(filters) => this.handleFilters(filters, 'wood')}
                            />
                            <CollapseCheckbox
                                initState = {false}
                                title = "Frets"
                                list = {frets}
                                handleFilters = {(filters) => this.handleFilters(filters, 'fret')}
                            />
                            <CollapseRadio
                                initState = {true}
                                title = "Price"
                                list = {price}
                                handleFilters = {(filters) => this.handleFilters(filters, 'price')}
                            />
                        </div>
                        <div className = "right">
                            <div className="shop_options">
                                <div className="shop_grids clear">
                                    GRIDS
                                </div>
                            </div>
                            <div>
                                <LoadmoreCards
                                    grid = {this.state.grid}
                                    limit = {this.state.limit}
                                    size = {products.toShopSize}
                                    products = {products.toShop}
                                    loadMore = {() => console.log('Load more')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}

// import connection to redux to get the props of the PageTop
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}   

// import connection to redux to get the props of the PageTop
export default connect(mapStateToProps)(Shop);