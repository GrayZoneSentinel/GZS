import React, { Component } from 'react';
// Formfield
import Formfield from '../Utils/Form/formfield';
import { update, generateData, isFormValid, populateFields } from '../Utils/Form/formActions';
// Redux
import { connect } from 'react-redux';
import { updateUserData, clearUpdateUser } from '../../Actions/user_actions';

class UpdatePersonalInfo extends Component {

    state = {
        formError: false,
        formSuccess: false,
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
            lastname: {
                element: 'input',
                value: '',
                config: {
                    name: 'primerApellido_input',
                    type: 'text',
                    placeholder: 'Apellidos'
                },
                validation: {
                    required: true
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
            }
        }
    }


    // Populate fields with existing personal data
    componentDidMount() {
        const newFromData = populateFields(this.state.formdata, this.props.user.userData);

        this.setState({
            formdata: newFromData
        })
    } 

    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'update_user');
        // Get the new state set and sent back from the formActions
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        // Check if the formdata is valid and has the appropriate key-value pairs required in state
        let dataToSubmit = generateData(this.state.formdata, 'update_user');
        let formIsValid = isFormValid(this.state.formdata, 'update_user');
        
        if(formIsValid) {
            // console.log(dataToSubmit);
            this.props.dispatch(updateUserData(dataToSubmit)).then(()=>{
                if(this.props.user.updateUser.success){
                    this.setState({
                        formSuccess: true
                    }, ()=>{
                        setTimeout(()=>{
                            this.props.dispatch(clearUpdateUser());
                            this.setState({
                                formSuccess: false
                            })
                        },2000)
                    })
                }
            })
        } else {
            this.setState({ formError: true })
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={(event) => this.submitForm(event)}>
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
                                id={'lastname'}
                                formdata={this.state.formdata.lastname}
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
                    {/* Check the validation */}
                    { 
                        this.state.formSuccess 
                        ?
                            <div className="form_success">
                                Datos actualizados correctamente.
                            </div>
                        :
                            null
                    }
                    {
                        this.state.formError 
                            ?
                                <div className="error_label">
                                    Por favor, revisa los datos.
                                </div>
                            :
                                null
                    }
                    {/* Incorporate the sending button */}
                    <button onClick={(event) => this.submitForm(event)}>Actualizar información</button>
                </form> 
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(UpdatePersonalInfo);