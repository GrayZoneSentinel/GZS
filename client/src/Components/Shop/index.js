import React, { Component } from 'react';
// Importing the PageTop from utils
import PageTop from '../Utils/page_top';
// import connection to redux to get the props of the PageTop
import { connect } from 'react-redux';
// import get the products: create in product_actions file
import { getBrands, getWoods } from '../../Actions/product_actions';
// the leftside collapsing checkboxes
import CollapseCheckbox from '../Utils/collapseCheckbox';


class Shop extends Component {

    // import connection to redux to get the props of the PageTop
    componentDidMount() {
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());
    }
    // handleFilters functionality from the CollapseCheckbox
    handleFilters = () => {

    }

    render(){
        // import connection to redux to get the props of the PageTop
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
                        </div>
                        <div className = "right">
                            Right
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