import React, { Component } from 'react';
// LAYOUT
import PageTop from '../Utils/page_top';
// REDUX CONNECTION
import { connect } from 'react-redux';
import { getProductDetail, clearProductDetail } from '../../Actions/product_actions';
// Product Info & Images component
import ProdNfo from './prodNfo';
import ProdImg from './prodImg';
// Add to cart
import { addToCart } from '../../Actions/user_actions';

 
class ProductPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        // console.log(id);
        this.props.dispatch(getProductDetail(id))
        .then(response => {
            if(!this.props.products.prodDetail){
                // console.log('Producto no encontrado');
                this.props.history.push('/')
            }
        });
    }

    componentWillUnmount() {
        this.props.dispatch(clearProductDetail());
    }

    addToCartHandler(id) {
        // console.log(id)
        this.props.dispatch(addToCart(id));
    }

    render(){
        return(
            <div>
                <PageTop title="Información del producto"/>
                <div className="container">
                    {
                        this.props.products.prodDetail
                            ?
                                <div className="product_detail_wrapper">
                                    <div className="left">
                                        <div style={{width:'500px'}}>
                                            <ProdImg
                                                detail = {this.props.products.prodDetail}
                                            />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <ProdNfo
                                            addToCart = {(id) => this.addToCartHandler(id)}
                                            detail = {this.props.products.prodDetail}
                                        />
                                    </div>
                                </div>
                            :
                                'Cargando...'
                    }                    
                </div>
            </div>
            
        )
    } 
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}
export default connect(mapStateToProps)(ProductPage);