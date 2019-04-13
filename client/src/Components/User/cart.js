import React, { Component } from 'react';
// Layout
import UserLayout from '../../hoc/userLayout';
// Product block
import UserProductBlock from '../Utils/User/product_block';
// Redux
import { connect } from 'react-redux';
import { getCartItems } from '../../Actions/user_actions';
// FontAwesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown';
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile';

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

                });
            }
        }
    }

    // Remove item from cart
    removeFromCart = () => {

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
                    </div>
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