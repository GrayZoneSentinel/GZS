import React, { Component } from 'react';
// Forms
import Formfield from '../../Utils/Form/formfield';
import { update, generateData, isFormValid, resetFields } from '../../Utils/Form/formActions';
// Redux connection
import { connect } from 'react-redux';
// Get elements
import { getWoods, addWood } from '../../../Actions/product_actions';

class ManageWoods extends Component {

    state = {
        formError: false,
        formSuccess: false,
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    // label: 'Wood',
                    name: 'wood_name',
                    type: 'text',
                    placeholder: 'Material de construcción principal'
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

    // Get the woods
    showCategoryItems = () => (
        this.props.products.woods
            ?
                this.props.products.woods.map((item, i) => (
                    <div className = "category_item" key = {item._id}>
                        {item.name}
                    </div>
                ))
            :
                null
    )

    componentDidMount() {
        this.props.dispatch(getWoods());
    }

    // Update form function
    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'woods');
        // Get the new state set and sent back from the formActions
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    // Reset field handler if the form is submitted as valid
    resetFieldHandler = () => {
        const newFormData = resetFields(this.state.formdata, 'woods');
        this.setState({ 
            formdata: newFormData,
            formSuccess: true 
        });
    }

    // Submit form function
    submitForm = (event) => {
        event.preventDefault();
        // Check if the formdata is valid and has the appropriate key-value pairs required in state
        let dataToSubmit = generateData(this.state.formdata, 'woods');
        let formIsValid = isFormValid(this.state.formdata, 'woods');
        let existingWoods = this.props.products.woods;
        
        if(formIsValid) {
            // console.log(dataToSubmit);
            this.props.dispatch(addWood(dataToSubmit, existingWoods))
            .then(response => {
                if(response.payload.success) {
                    this.resetFieldHandler();
                } else {
                    this.setState({ formError: true })        
                }
            })
        } else {
            this.setState({ formError: true })
        }
    }

    render(){
        return(
            <div className="admin_category_wrapper">
                <h1 style={{textTransform: 'uppercase', letterSpacing: '.3rem', marginTop: '40px'}}>Wood management</h1>
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
                                            Material agregado con éxito.
                                        </div>
                                    :
                                        null
                            }
                            {
                                this.state.formError
                                    ?
                                        <div className="error_label">
                                            Revisar los datos del material a incorporar.
                                        </div>
                                    :
                                        null
                            }
                            <button onClick={(event) => this.submitForm(event)}>
                                Agregar material
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}
export default connect(mapStateToProps)(ManageWoods);