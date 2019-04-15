import React, { Component } from 'react';
// Formfield
import Formfield from '../../Utils/Form/formfield';
import { update, generateData, isFormValid, populateFields } from '../../Utils/Form/formActions';
// Redux
import { connect } from 'react-redux';
// import {  } from '../../Actions/user_actions';

class UpdateSiteNfo extends Component {

    state = {
        formSuccess: false,
        formError: false,
        formdata: {
            address: {
                element: 'input',
                value: '',
                config: {
                    label: 'Domicilio social',
                    name: 'address_name',
                    type: 'text',
                    placeholder: 'Introduce la dirección postal'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            workingTime: {
                element: 'input',
                value: '',
                config: {
                    label: 'Horario comercial',
                    name: 'workingTime_name',
                    type: 'text',
                    placeholder: 'Introduce el horario de atención al público'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            phone: {
                element: 'input',
                value: '',
                config: {
                    label: 'Teléfono',
                    name: 'phone_number',
                    type: 'text',
                    placeholder: 'Introduce el teléfono de atención al público'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            email: {
                element: 'input',
                value: '',
                config: {
                    label: 'Correo electrónico',
                    name: 'email_number',
                    type: 'text',
                    placeholder: 'Introduce el correo electrónico de atención al público'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            }
        }
    }

    // Populate fields with existing personal data
    // componentDidMount() {
    //     const newFormdata = populateFields(this.state.formdata);

    //     this.setState({
    //         formdata: newFormdata
    //     })
    // } 

    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'site_nfo');
        // Get the new state set and sent back from the formActions
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        // Check if the formdata is valid and has the appropriate key-value pairs required in state
        let dataToSubmit = generateData(this.state.formdata, 'site_nfo');
        let formIsValid = isFormValid(this.state.formdata, 'site_nfo');
        
        if(formIsValid) {
            console.log(dataToSubmit);
        //     this.props.dispatch(updateSiteInfo(dataToSubmit)).then(()=>{
        //         if(this.props.user.updateUser.success){
        //             this.setState({
        //                 formSuccess: true
        //             }, ()=>{
        //                 setTimeout(()=>{
        //                     this.props.dispatch(clearUpdateSite());
        //                     this.setState({
        //                         formSuccess: false
        //                     })
        //                 },2000)
        //             })
        //         }
        //     })
        // } else {
        //     this.setState({ formError: true })
        }
    }

    render(){
        return(
            <div>
                <h1>Añadir producto</h1>
                <form onSubmit = { (event) => this.submitForm(event) }>
                    <Formfield
                        id = {'address'}
                        formdata = {this.state.formdata.address}
                        change = { (element) => this.updateForm(element) }
                    />
                    <Formfield
                        id = {'workingTime'}
                        formdata = {this.state.formdata.workingTime}
                        change = { (element) => this.updateForm(element) }
                    />
                    <Formfield
                        id = {'phone'}
                        formdata = {this.state.formdata.phone}
                        change = { (element) => this.updateForm(element) }
                    />
                    <Formfield
                        id = {'email'}
                        formdata = {this.state.formdata.email}
                        change = { (element) => this.updateForm(element) }
                    />
                    {
                        this.state.formSuccess
                            ?
                                <div className="form_success">
                                    Información actualizada.
                                </div>
                            :
                                null
                    }
                    {
                        this.state.formError
                            ?
                                <div className="error_label">
                                    Revisa los datos.
                                </div>
                            :
                                null
                    }
                    <button onClick={(event) => this.submitForm(event)}>
                        Actualizar información
                    </button>
                </form>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return{
        site: state.site
    }
}
export default connect(mapStateToProps)(UpdateSiteNfo);