export const getInvalidFields = (fields) => {
    const invalidFields = Object.keys(fields).filter(field => {
        if(fields[field].required && fields[field].value === '' || fields[field].required && fields[field].value === null) {
            return field;
        } 
    });

    return invalidFields;
}