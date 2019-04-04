import React, { Component } from 'react';
// Links section depending on the state of auth: import Link functionality
import { Link } from 'react-router-dom';
// Links section depending on the state of auth: import redux availability to get server access to know whether the user is login
import { connect } from 'react-redux';
// LogoutHandler link function
import { logoutUser } from '../../Actions/user_actions';
// Bring the routing props from other routes
import { withRouter } from 'react-router-dom';


class Header extends Component {

    // Links section depending on the state of auth: set links
    state = {
        page: [
            {
                name: "Inicio",
                linkTo: "/",
                public: true
            },
            {
                name: "Guitars",
                linkTo: "/shop",
                public: true
            }
        ],
        user:[
            {
                name: "Carrito",
                linkTo: "user/cart",
                public: false
            },
            {
                name: "Mi cuenta",
                linkTo: "user/dashboard",
                public: false
            },
            {
                name: "Acceder",
                linkTo: "/register_login",
                public: true
            },
            {
                name: "Salir",
                linkTo: "user/logout",
                public: false
            },
        ]
    }

    // LogoutHandler link function
    logoutHandler = () => {
        this.props.dispatch(logoutUser()).then(response =>{
            if(response.payload.success){
                this.props.history.push('/');
            }
        })
    }

    // Links section depending on the state of auth: depending on the cart or other variables
    cartLink = (item, i) => {
        const user = this.props.user.userData;
        return(
            <div className="cart_link" key={i}>
                <span>{ user.cart ? user.cart.length : 0}</span>
                <Link to={item.linkTo}>
                    {item.name}
                </Link>
            </div>
        )
    }

    defaultLink = (item, i) => (
        item.name === 'Salir' 
            ?
                <div className="log_out_link"
                    key={i}
                    onClick={() => this.logoutHandler()}
                >
                    {item.name}
                </div>
            :
                <Link to={item.linkTo} key={i}>
                    {item.name}
                </Link>
    )

    // Links section depending on the state of auth: function to determine the different types of links
    showLinks = (type) => {
        let list = [];
         if(this.props.user.userData){
             type.forEach((item) => {
                 if(!this.props.user.userData.isAuth){
                    if(item.public === true){
                        list.push(item)
                    }
                 } else {
                    if(item.name !== "Acceder"){
                        list.push(item)
                    }
                 }
             });
         }

         return list.map((item, i) => {
             if(item.name !== "Carrito"){
                return this.defaultLink(item, i)
             } else {
                return this.cartLink(item, i)
             }
         });
    }   

    render() {
        return(
            <header className="bck_b_light">
                 <div className="container">
                    <div className="left">
                        <div className="logo">
                            GZSentinel
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            {/* Links section depending on the state of auth: import Link functionality: kind of links */}
                            {this.showLinks(this.state.user)}
                        </div>
                        <div className="bottom">
                            {/* Links section depending on the state of auth: import Link functionality: kind of links */}
                            {this.showLinks(this.state.page)}
                        </div>
                    </div>
                </div>
            </header>    
        );
    }
}

// Links section depending on the state of auth: make available the function to know whether the user is login
function mapStateToProps(state){
    return {
        user: state.user
    }
}

// Links section depending on the state of auth: make Redux available
export default connect(mapStateToProps)(withRouter(Header));