

export const validate = (element, formdata = []) => {
    let error = [true, ''];
    if(element.validation.email) {
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Debes introducir un email válido' : ''}`;
        error = !valid ? [valid, message] : error;
    }
    if(element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'Este campo es obligatorio' : ''}`;
        error = !valid ? [valid, message] : error;
    }
    return error;
}

export const update = (element, formdata, formName) => {
    const newFormdata = {
        ...formdata
    }
    const newElement = {
        ...newFormdata[element.id]
    }
    // The event it's got back from onChange within Formfield component
    newElement.value = element.event.target.value;
    // Check whether the info provided is valid
    if(element.blur) {
        let validData = validate(newElement, formdata);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }
    newElement.touched = element.blur;
    // Insert the newElement into the newFormdata
    newFormdata[element.id] = newElement;
    // Return the new formdata
    return newFormdata;
}