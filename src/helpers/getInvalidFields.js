export const getInvalidFields = (fields) => {
    const invalidFields = Object.keys(fields).filter(field => {
        if(fields[field].required && !fields[field].value) {
            return field;
        } 
    });

    return invalidFields;
}