/*
    This helper  allow us to get the invalid field in the form to show an alert with a error message
    
    @param {Object} fields: Is the object with the values of the field in the form
*/

export const getInvalidFields = (fields) => {
    const invalidFields = Object.keys(fields).filter(field => {
        if(fields[field].required && fields[field].value === '' || fields[field].required && fields[field].value === null) {
            return field;
        } 
    });

    return invalidFields;
}