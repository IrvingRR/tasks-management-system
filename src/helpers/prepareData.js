export const prepareData = (data) => {
    const urlencoded = new URLSearchParams();

    Object.keys(data).map(key => {
        if(data[key].value || data[key].value.length > 0) {
            urlencoded.append(key.toString(), data[key].value);
        } 
    });

    return urlencoded;

}