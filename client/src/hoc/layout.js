import React, { Component } from 'react';

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Layout extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="page_container">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Layout;