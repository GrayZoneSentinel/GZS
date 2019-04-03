import React from 'react';
import { Link } from 'react-router-dom';

//Create the Links array
const links = [
    {
        name: 'Mi cuenta',
        linkTo: 'user/dashboard'
    },
    {
        name: 'Info usuario',
        linkTo: 'user/user_profile'
    },
    {
        name: 'Carrito',
        linkTo: 'user/cart'
    },
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
                </div>
                <div className="user_right">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default UserLayout;