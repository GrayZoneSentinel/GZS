import React, { Component } from 'react';

//Components
import HomeSlider from './home_slider';
import HomePromotions from './home_promotion';

import CardBlock from '../Utils/card_block';

//Products
import { connect } from 'react-redux';
import { getProductsBySell, getProductsByArrival } from '../../Actions/product_actions';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(getProductsByArrival());
    }

    render() {
        return(
            <div>
                <HomeSlider/>
                <CardBlock
                    list = {this.props.products.bySell}
                    title = 'Best selling guitars'
                />
                <HomePromotions/>
                <CardBlock
                    list = {this.props.products.byArrival}
                    title = 'New arrivals'
                />
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);