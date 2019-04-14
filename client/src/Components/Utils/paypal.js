import React, { Component } from 'react';
// PAYPAL
import PaypalExpressButton from 'react-paypal-express-checkout';

class Paypal extends Component {

    render(){

        const onSuccess = (payment) => {
            console.log(JSON.stringify(payment));
            this.props.onSuccess(payment);
            //{
                //"paid":true,
                //"cancelled":false,
                //"payerID":"GBXHK9J9UHBSC",
                //"paymentID":"PAYID-LSZEBOY91F89825UK4258740",
                //"paymentToken":"EC-86053490760415353",
                //"returnUrl":"https://www.paypal.com/checkoutnow/error?paymentId=PAYID-LSZEBOY91F89825UK4258740&token=EC-86053490760415353&PayerID=GBXHK9J9UHBSC",
                //"address":{
                    //"recipient_name":"Ernesto García",
                    //"line1":"Av Posse, 11",
                    //"city":"Sada",
                    //"state":"A CORUÑA",
                    //"postal_code":"15160",
                    //"country_code":"ES"
                //},
                //"email":"201410929-buyer@alu.comillas.edu"
            //}
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