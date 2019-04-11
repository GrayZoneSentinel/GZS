import React, { Component } from 'react';
// Forms
import Formfield from '../../Utils/Form/formfield';
import { update, generateData, isFormValid, populateOptionFields, resetFields } from '../../Utils/Form/formActions';
// Redux connection
import { connect } from 'react-redux';
// Get elements
import { getBrands } from '../../../Actions/product_actions';

class ManageBands extends Component {

    state = {
        formError: false,
        formSuccess: false,
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    // label: 'Marca',
                    name: 'brand_name',
                    type: 'text',
                    placeholder: 'Nombre de la marca'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
                // showLabel: true
            }
        }
    }    

    // Get the brands
    showCategoryItems = () => (
        this.props.products.brands
            ?
                this.props.products.brands.map((item, i) => (
                    <div className = "category_item" key = {item._id}>
                        {item.name}
                    </div>
                ))
            :
                null
    )

    componentDidMount() {
        this.props.dispatch(getBrands());
    }

    // Update form function
    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'brands');
        // Get the new state set and sent back from the formActions
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    // Submit form function
    submitForm = (event) => {
        event.preventDefault();
        // Check if the formdata is valid and has the appropriate key-value pairs required in state
        let dataToSubmit = generateData(this.state.formdata, 'brands');
        let formIsValid = isFormValid(this.state.formdata, 'brands');
        
        if(formIsValid) {
            console.log(dataToSubmit)
            
        } else {
            this.setState({ formError: true })
        }
    }

    render(){
        return(
            <div className="admin_category_wrapper">
                <h1>Brands management</h1>
                <div className="admin_two_column">
                    <div className="left">
                        <div className="brands_container">
                            {this.showCategoryItems()}
                        </div>
                    </div>
                    <div className="right">
                        <form onSubmit = { (event) => this.submitForm(event) }>
                            <Formfield
                                id = {'name'}
                                formdata = {this.state.formdata.name}
                                change = { (element) => this.updateForm(element) }
                            />
                            {
                                this.state.formSuccess
                                    ?
                                        <div className="form_success">
                                            Marca agregada con éxito.
                                        </div>
                                    :
                                        null
                            }
                            {
                                this.state.formError
                                    ?
                                        <div className="error_label">
                                            Revisar los datos de la marca.
                                        </div>
                                    :
                                        null
                            }
                            <button onClick={(event) => this.submitForm(event)}>
                                Agregar marca
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    } 
}

// Get elements mapped from props
const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(ManageBands);