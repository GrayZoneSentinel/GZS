import React, { Component } from 'react';
// PAYPAL
import PaypalExpressButton from 'react-paypal-express-checkout';

class Paypal extends Component {

    render(){

        const onSuccess = (payment) => {
            console.log(JSON.stringify(payment))
        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data))
        }

        const onError = (error) => {
            console.log(JSON.stringify(error))
        }

        let env = 'sandbox';
        let currency = 'EUR';
        let total = this.props.toPay;

        const client = {
            sandbox: 'AWJ_hHxjQKlarmiSzicMyqyIdJqvhdHxC1HDhCrvhaM5gfQx3hBbp8FzaHBGMILvgKCMWG7hL_YmLbsK',
            production: ''
        }

        return(
            <div style={{textAlign:'center'}}>
                <PaypalExpressButton
                    env = {env}
                    client = {client}
                    currency = {currency}
                    total = {total}
                    onError = {onError}
                    onSuccess = {onSuccess}
                    onCancel = {onCancel}
                    style = {{
                        size: 'large',
                        color: 'black',
                        shape: 'pill',
                        label: 'checkout',
                        tagline: true
                    }}
                />
            </div>
        )
    } 
}

export default Paypal;