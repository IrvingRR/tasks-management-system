/*
    This helper  allow us to prepare the data before to send in the http request.
    Create new instance of URLSearchParams ann append every field only if has a valid value
    this way we can indicate what values we want to send
    
    @param {Object} data: Is the object with the values of the field in the form
*/

export const prepareData = (data) => {
    const urlencoded = new URLSearchParams();
    // Token value used to authorization in the api
    const TOKEN = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd';

    Object.keys(data).map(key => {
        // If the value of the current key is valid (is not null) we append it to search params
        if(data[key].value) {
            urlencoded.append(key.toString(), data[key].value);
        }
    });

    urlencoded.append("token", TOKEN);

    return urlencoded;

}