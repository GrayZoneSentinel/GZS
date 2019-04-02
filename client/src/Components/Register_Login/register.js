import React, { Component } from 'react';
import Formfield from '../Utils/Form/formfield';
import { update, generateData, isFormValid } from '../Utils/Form/formActions';
import { connect } from 'react-redux';
import { loginUser } from '../../Actions/user_actions';

class Register extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Nombre'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            primerApellido: {
                element: 'input',
                value: '',
                config: {
                    name: 'primerApellido_input',
                    type: 'text',
                    placeholder: 'Primer apellido'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            segundoApellido: {
                element: 'input',
                value: '',
                config: {
                    name: 'segundoApellido_input',
                    type: 'text',
                    placeholder: 'Segundo apellido'
                },
                validation: {
                    required: false
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
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
            },
            confirmPassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'confirmPassword_input',
                    type: 'password',
                    placeholder: 'Confirma tu clave de acceso'
                },
                validation: {
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
            
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'register');
        // Get the new state set and sent back from the formActions
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        // Check if the formdata is valid and has the appropriate key-value pairs required in state
        let dataToSubmit = generateData(this.state.formdata, 'register');
        let formIsValid = isFormValid(this.state.formdata, 'register');
        
        if(formIsValid) {
            
        } else {
            this.setState({
                formError: true
            })
        }
    }

    render(){
        return(
            <div className="page_wrapper">
                <div className="container">
                    <div className="register_login_container">
                        <div className="left">
                            <form onClick={(event) => this.submitForm(event)}>
                                <h2>Informacion personal</h2>
                                <div className="form_block_two">
                                    <div className="block">
                                        <Formfield
                                            id={'name'}
                                            formdata={this.state.formdata.name}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                    <div className="block">
                                        <Formfield
                                            id={'primerApellido'}
                                            formdata={this.state.formdata.primerApellido}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                    <div className="block">
                                        <Formfield
                                            id={'segundoApellido'}
                                            formdata={this.state.formdata.segundoApellido}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                                <div className="block">
                                    <Formfield
                                        id={'email'}
                                        formdata={this.state.formdata.email}
                                        change={(element) => this.updateForm(element)}
                                    />
                                </div>
                                <h2>Acceso</h2>
                                <div className="form_block_two">
                                    <div className="block">
                                        <Formfield
                                            id={'password'}
                                            formdata={this.state.formdata.password}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                    <div className="block">
                                        <Formfield
                                            id={'confirmPassword'}
                                            formdata={this.state.formdata.confirmPassword}
                                            change={(element) => this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                                <div>
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
                                    <button onClick={(event) => this.submitForm(event)}>Registrase</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default connect()(Register);
