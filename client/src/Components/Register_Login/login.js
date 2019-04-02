import React, { Component } from 'react';
import Formfield from '../Utils/Form/formfield';
import { connect } from 'react-redux';
// Reference to the update function set in formActions
import { update } from '../Utils/Form/formActions';

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
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Clave de acceso'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }


    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'login');
        // Get the new state set and sent back from the formActions
        this.setState({
            formError: false,
            formdata: newFormdata
        })
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
                    <Formfield
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element) => this.updateForm(element)}
                    />
                </form>
            </div>
        )
    }
}

export default connect()(Login);