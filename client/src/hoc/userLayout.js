import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Create the Links array
const links = [
    {
        name: 'Mi cuenta',
        linkTo: '/user/dashboard'
    },
    {
        name: 'Info usuario',
        linkTo: '/user/update_profile'
    },
    {
        name: 'Carrito',
        linkTo: '/user/cart'
    },
]

// Create the Admin links
const adminLinks = [
    {
        name: 'Site info',
        linkTo: '/admin/site_info'
    },
    {
        name: 'Añadir producto',
        linkTo: '/admin/add_products'
    },
    {
        name: 'Gestionar categorías',
        linkTo: '/admin/manage_categories'
    }
]

const UserLayout = (props) => {
    // Function to deploy the links contained within the const links array
    const generateLinks = (links) => (
        links.map((item, i) => (
            <Link to={item.linkTo} key={i}>
                {item.name}
            </Link>
        ))
        // console.log(links);
    )
    
    return(
        <div className="container">
            <div className="user_container">
                <div className="user_left_nav">
                    <h2>Mi cuenta</h2>
                    <div className="links">
                        { generateLinks(links) } 
                    </div>
                    {
                        props.user.userData.isAdmin
                            ?
                                <div>
                                    <h2>Admin</h2>
                                    <div className = "links">
                                        { generateLinks(adminLinks) }
                                    </div>
                                </div>
                            :
                                null
                    }
                </div>
                <div className="user_right">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

// Get the auth state
const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(UserLayout);