import React, { Component } from 'react';
// Formfield
import Formfield from '../../Utils/Form/formfield';
import { update, generateData, isFormValid, populateFields } from '../../Utils/Form/formActions';
// Redux
import { connect } from 'react-redux';
import { getSiteData } from '../../../Actions/site_actions';

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
            workingHours: {
                element: 'input',
                value: '',
                config: {
                    label: 'Horario comercial',
                    name: 'workingTime_name',
                    type: 'text',
                    placeholder: 'Introduce el horario comercial'
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
                    placeholder: 'Tel. atención al público'
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

    componentDidMount() {
        this.props.dispatch(getSiteData()).then(()=>{
            // console.log(this.props.site.siteData[0]);
            const newFormdata = populateFields(this.state.formdata, this.props.site.siteData[0]);
            this.setState({
                formdata: newFormdata
            })
        });
    } 

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
            // this.props.dispatch(getSiteData()).then(()=>{
            //     if(this.props.site.success){
            //         this.setState({
            //             formSuccess: true
            //         })
            //     }
            // })
        } else {
            this.setState({ formError: true })
        }
    }

    render(){
        return(
            <div>
                <h1>Información comercial</h1>
                <form onSubmit = { (event) => this.submitForm(event) }>
                    <div className="form_block_two">
                        <div className="block">
                            <Formfield
                                id = {'address'}
                                formdata = {this.state.formdata.address}
                                change = { (element) => this.updateForm(element) }
                            />
                        </div>
                        <div className="block">
                            <Formfield
                                id = {'workingHours'}
                                formdata = {this.state.formdata.workingHours}
                                change = { (element) => this.updateForm(element) }
                            />
                        </div>
                    
                        <div className="block">
                            <Formfield
                                id = {'phone'}
                                formdata = {this.state.formdata.phone}
                                change = { (element) => this.updateForm(element) }
                            />
                        </div>
                    </div>  
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