import React, { Component } from 'react';
// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';
//Redux connection
import { connect } from 'react-redux';
import { getSiteData } from '../Actions/site_actions';

class Layout extends Component {

    componentDidMount() {
        if(Object.keys(this.props.site).length === 0){
            this.props.dispatch(getSiteData());
        }
    }

    render() {
        return(
            <div>
                <Header/>
                <div className="page_container">
                    {this.props.children}
                </div>
                <Footer
                    data = {this.props.site}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        site: state.site
    }
}
export default connect(mapStateToProps)(Layout);