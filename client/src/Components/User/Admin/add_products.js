import React, { Component } from 'react';
import UserLayout from '../../../hoc/userLayout';
// Forms
import Formfield from '../../Utils/Form/formfield';
import { update, generateData, isFormValid } from '../../Utils/Form/formActions';
// Redux connection
import { connect } from 'react-redux';
// Get elements
import { getBrands, getWoods } from '../../../Actions/product_actions';


class AddProduct extends Component {

    state = {
        formError: false,
        formSuccess: false,
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    label: 'Nombre producto',
                    name: 'product_name',
                    type: 'text',
                    placeholder: 'Nombre del producto'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            description: {
                element: 'input',
                value: '',
                config: {
                    label: 'Descripción',
                    name: 'description_name',
                    type: 'text',
                    placeholder: 'Descripción del producto'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            price: {
                element: 'input',
                value: '',
                config: {
                    label: 'Precio',
                    name: 'price_name',
                    type: 'number',
                    placeholder: 'Introduce el precio'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            brand: {
                element: 'select',
                value: '',
                config: {
                    label: 'Marca',
                    name: 'brands_input',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            shipping: {
                element: 'select',
                value: '',
                config: {
                    label: 'Cargos envío',
                    name: 'shipping_input',
                    options: [
                        { key: true, value: 'Sí'},
                        { key: false, value: 'No' }
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            available: {
                element: 'select',
                value: '',
                config: {
                    label: 'Disponible en stock',
                    name: 'available_input',
                    options: [
                        { key: true, value: 'Sí'},
                        { key: false, value: 'No' }
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            wood: {
                element: 'select',
                value: '',
                config: {
                    label: 'Material',
                    name: 'wood_input',
                    options: []
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            frets: {
                element: 'select',
                value: '',
                config: {
                    label: 'Frets',
                    name: 'frets_input',
                    options: [
                        { key: 20, value: 20 },
                        { key: 21, value: 21 },
                        { key: 22, value: 22 },
                        { key: 24, value: 24 }
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            publish: {
                element: 'select',
                value: '',
                config: {
                    label: 'En venta',
                    name: 'publish_input',
                    options: [
                        { key: true, value: 'En venta' },
                        { key: false, value: 'No ofertada' }
                    ]
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            }
        }
    }

    render(){
        return(
            <UserLayout>
                <div>
                    <h1>Añadir producto</h1>
                    <form onSubmit = { (event) => this.submitForm(event) }>
                        <Formfield
                            id = {'name'}
                            formdata = {this.state.formdata.name}
                            change = { (element) => this.updateForm(element) }
                        />
                        <Formfield
                            id = {'description'}
                            formdata = {this.state.formdata.description}
                            change = { (element) => this.updateForm(element) }
                        />
                        <Formfield
                            id = {'price'}
                            formdata = {this.state.formdata.price}
                            change = { (element) => this.updateForm(element) }
                        />
                        <Formfield
                            id = {'brand'}
                            formdata = {this.state.formdata.brand}
                            change = { (element) => this.updateForm(element) }
                        />
                        <Formfield
                            id = {'shipping'}
                            formdata = {this.state.formdata.shipping}
                            change = { (element) => this.updateForm(element) }
                        />
                        <Formfield
                            id = {'available'}
                            formdata = {this.state.formdata.available}
                            change = { (element) => this.updateForm(element) }
                        />
                        <Formfield
                            id = {'wood'}
                            formdata = {this.state.formdata.wood}
                            change = { (element) => this.updateForm(element) }
                        />
                        <Formfield
                            id = {'frets'}
                            formdata = {this.state.formdata.frets}
                            change = { (element) => this.updateForm(element) }
                        />
                        <Formfield
                            id = {'publish'}
                            formdata = {this.state.formdata.publish}
                            change = { (element) => this.updateForm(element) }
                        />
                    </form>
                </div>
            </UserLayout>
        )
    } 
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(AddProduct);