import React, { Component } from 'react';
import UserLayout from '../../../hoc/userLayout';
// Forms
import Formfield from '../../Utils/Form/formfield';
import { update, generateData, isFormValid, populateOptionFields, resetFields } from '../../Utils/Form/formActions';
// Redux connection
import { connect } from 'react-redux';
// Get elements
import { getBrands, getWoods, addProduct, clearProduct } from '../../../Actions/product_actions';
// Images uploader
import FileUploader from '../../Utils/Form/fileupload';

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
                element: 'textarea',
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
            },
            images: {
                value: [],
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                validationMessage: '',
                showLabel: false
            }
        }
    }


    // Update fields in the selections
    updateFields = (newFormData) => {
        this.setState({
            formdata: newFormData
        })
    }

    // Update form function
    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'products');
        // Get the new state set and sent back from the formActions
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    // Reset field handler if the form is submitted as valid
    resetFieldHandler = () => {
        const newFormData = resetFields(this.state.formdata, 'products');
        this.setState({ 
            formdata: newFormData,
            formSuccess: true 
        });
        setTimeout(() => {
            this.setState({
                formSuccess: false
            }, () => {
                this.props.dispatch(clearProduct());
            })
        }, 3000)
    }

    // Submit form function
    submitForm = (event) => {
        event.preventDefault();
        // Check if the formdata is valid and has the appropriate key-value pairs required in state
        let dataToSubmit = generateData(this.state.formdata, 'products');
        let formIsValid = isFormValid(this.state.formdata, 'products');
        
        if(formIsValid) {
            // console.log(dataToSubmit)
            this.props.dispatch(addProduct(dataToSubmit)).then( () => {
                if(this.props.products.addProduct.success) {
                    this.resetFieldHandler();
                } else {
                    this.setState({ formError: true })
                } 
            })
        } else {
            this.setState({ formError: true })
        }
    }

    // Get the brands and woods
    componentDidMount(){
        const formdata = this.state.formdata;
        // Get brands
        this.props.dispatch(getBrands())
        .then(response =>{
            // console.log(this.props.products.brands)
            const newFormData = populateOptionFields(formdata, this.props.products.brands, 'brand');
            // console.log(this.props.products.brands)
            // console.log(newFormData)
            this.updateFields(newFormData);
        })
        // Get woods
        this.props.dispatch(getWoods())
        .then(response =>{
            // console.log(this.props.products.brands)
            const newFormData = populateOptionFields(formdata, this.props.products.woods, 'wood');
            // console.log(this.props.products.brands)
            // console.log(newFormData)
            this.updateFields(newFormData);
        })
    }

    // Images handler
    imagesHandler = (images) => {
        const newFormData = {
            ...this.state.formdata
        }
        newFormData['images'].value = images;
        newFormData['images'].valid = true;

        this.setState({
            formdata: newFormData
        })
    }


    render(){
        return(
            <UserLayout>
                <div>
                    <h1>Añadir producto</h1>
                    <form onSubmit = { (event) => this.submitForm(event) }>

                        <FileUploader
                            imagesHandler = {(images) => this.imagesHandler(images)}
                            reset = {this.state.formSuccess}
                        />

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
                        <div className="form_devider"></div>
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
                        <div className="form_devider"></div>
                        <Formfield
                            id = {'publish'}
                            formdata = {this.state.formdata.publish}
                            change = { (element) => this.updateForm(element) }
                        />
                        {
                            this.state.formSuccess
                                ?
                                    <div className="form_success">
                                        Producto incorporado con éxito.
                                    </div>
                                :
                                    null
                        }
                        {
                            this.state.formError
                                ?
                                    <div className="error_label">
                                        Revisar los datos del producto.
                                    </div>
                                :
                                    null
                        }
                        <button onClick={(event) => this.submitForm(event)}>
                            Agregar producto
                        </button>
                    </form>
                </div>
            </UserLayout>
        )
    } 
}

const mapStateToProps = (state) => { return { products: state.products } }

export default connect(mapStateToProps)(AddProduct);