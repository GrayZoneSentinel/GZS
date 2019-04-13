import React, { Component } from 'react';
// Layout
import UserLayout from '../../hoc/userLayout';
// Product block
import UserProductBlock from '../Utils/User/product_block';
// Redux
import { connect } from 'react-redux';
import { getCartItems, removeCartItem } from '../../Actions/user_actions';
// FontAwesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown';
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile';
// PAYPAL
// Client ID Paypal
// AWJ_hHxjQKlarmiSzicMyqyIdJqvhdHxC1HDhCrvhaM5gfQx3hBbp8FzaHBGMILvgKCMWG7hL_YmLbsK
import Paypal from '../Utils/paypal';

class Register extends Component {

    state = {
        loading: true,
        total: 0,
        showTotal: false,
        showSucces: false
    }

    componentDidMount() {
        let cartItems = [];
        let user = this.props.user;

        if(user.userData.cart){
            if(user.userData.cart.length > 0 ){
                user.userData.cart.forEach( item => {
                    cartItems.push(item.id)
                });

                this.props.dispatch(getCartItems(cartItems, user.userData.cart))
                .then(() => {
                    // The logic to get the total ammount of the products comprised in the cart
                    if(this.props.user.cartDetail.length > 0){
                        this.calculateTotal(this.props.user.cartDetail);
                    }
                });
            }
        }
    }

    // Calculate the total ammount of the products in cart
    calculateTotal = (cartDetail) => {
        let total = 0;
        cartDetail.forEach(item => {
            total += parseInt(item.price, 10) * item.quantity
        });
        this.setState({
            showTotal: true,
            total
        });
    }

    // Show no item message
    showNoItemMessage = () => (
        <div className="cart_no_items">
            <FontAwesomeIcon icon={faFrown}/>
            <div>La cesta de compra está vacía</div>
        </div>
    )

    // Remove item from cart
    removeFromCart = (id) => {
        this.props.dispatch(removeCartItem(id))
        .then(() => {
            if(this.props.user.cartDetail.length <= 0) {
                this.setState({
                    showTotal: false
                })
            } else {
                this.calculateTotal(this.props.user.cartDetail)
            }
        })
    }

    // =============================
    // Paypal transactions functions
    // =============================
    //  Error
    transactionError = (data) => {

    }
    //  Cancelled
    transactionCancelled = (data) => {
        
    }
    //  Success
    onSuccess = (data) => {
        
    }

    render(){
        return(
            <UserLayout>
                <div>
                    <h1>Cesta de la compra</h1>
                    <div className="user_cart">
                        <UserProductBlock
                            products = {this.props.user}
                            type = "cart"
                            removeItem = {(id) => this.removeFromCart(id)}
                        />
                        {
                            this.state.showTotal
                                ?
                                    <div>
                                        <div className="user_cart_sum">
                                            <div>
                                                Importe total: {this.state.total}.-Euros
                                            </div>
                                        </div>
                                    </div>
                                :
                                    this.state.showSucces
                                        ?
                                            <div className="cart_success">
                                                <FontAwesomeIcon icon={faSmile}/>
                                                <div>Gracias, tu compra se ha realizado con éxito!</div>
                                            </div>
                                        :
                                            this.showNoItemMessage()
                        }
                    </div>
                    {
                        this.state.showTotal
                            ?
                                <div className="paypal_button_container">
                                    <Paypal
                                        toPay = {this.state.total}
                                        transactionError = {(data) => this.transactionError(data)}
                                        transactionCanceled = {(data) => this.transactionCanceled(data)}
                                        onSuccess = {(data) => this.transactionSuccess(data)}
                                    />
                                </div>
                            :
                                null
                    }
                </div>
            </UserLayout>
        )
    } 
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Register);