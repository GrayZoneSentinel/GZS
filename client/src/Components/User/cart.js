import React, { Component } from 'react';
import UserLayout from '../../hoc/userLayout';
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
        let cartItem = [];
        let user = this.props.user;

        if(user.userData.cart){
            if(user.userData.cart.length > 0 ){
                user.userData.cart.forEach( item => {
                    cartItem.push(item.id)
                });

                this.props.dispatch(getCartItems(cartItem, user.userData.cart))
                .then(() => {

                });
            }
        }
    }

    render(){
        return(
            <UserLayout>
                <div>
                    CART   
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