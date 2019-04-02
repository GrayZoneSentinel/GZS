import React, { Component } from 'react';
import Formfield from '../Utils/Form/formfield';
import { connect } from 'react-redux';
// Reference to the update function set in formActions
import { update, generateData, isFormValid } from '../Utils/Form/formActions';
// Callback from actions: userActions: registered user
import { loginUser } from '../../Actions/user_actions';
// to get the props from the other routes
import { withRouter } from 'react-router-dom';

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

    submitForm = (event) => {
        event.preventDefault();
        // Check if the formdata is valid and has the appropriate key-value pairs required in state
        let dataToSubmit = generateData(this.state.formdata, 'login');
        let formIsValid = isFormValid(this.state.formdata, 'login');
        
        if(formIsValid) {
            // Callback from actions: userActions: loginUser: give access to a registered user
            this.props.dispatch(loginUser(dataToSubmit))
            .then(response => {
                if(response.payload.loginSuccess){
                    this.props.history.push('/user/dashboard')
                    // console.log(response.payload)
                } else {
                    this.setState({
                        formError: true
                    })
                }
            });
            // console.log(dataToSubmit)
        } else {
            this.setState({
                formError: true
            })
        }
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
                    {/* Check the validation */}
                    {
                        this.state.formError 
                            ?
                                <div className="error_label">
                                    Incorrecto; por favor, revisa los datos introducidos.
                                </div>
                            :
                                null
                    }
                    {/* Incorporate the sending button */}
                    <button onClick={(event) => this.submitForm(event)}>Acceder</button>
                </form>
            </div>
        )
    }
}

// to get the props from the other routes
export default connect()(withRouter(Login));