import React, { Component } from 'react';
import Formfield from '../Utils/Form/formfield';
import { connect } from 'react-redux';

class Login extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Correo electrónico'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            // password: {
            //     element: 'input',
            //     value: '',
            //     config: {
            //         name: 'password_input',
            //         type: 'password',
            //         placeholder: 'Clave de acceso'
            //     },
            //     validation: {
            //         required: true
            //     },
            //     valid: false,
            //     touched: false,
            //     validationMessage: ''
            // }
        }
    }


    updateForm = () => {

    }

    submitForm = () => {

    }

    render() {
        return(
            <div className="signin_wrapper">
                <form onSubmit={(event) => this.submitForm(event)}>
                    <Formfield
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element) => this.updateForm(element)}
                    />
                    {/* <Formfield
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element) => this.updateForm(element)}
                    /> */}
                </form>
            </div>
        )
    }
}

export default connect()(Login);