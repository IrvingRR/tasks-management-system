/*
    This helper  allow us to get the correct format date to create the new task.
    Receive a date param which will be used to create the format
    
    @param {Date | String} date: Is the date value which we want to use to apply the format YYY-MM-DD
*/
export const getFormatDate = (date) => {
    // If exist a date value received then we create the new format
    if(date) {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = (newDate.getMonth() + 1) < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1 ; //If the value is less than 10 so add a 0
        const day = (newDate.getDate() + 1) < 10 ? `0${newDate.getDate() + 1}` : newDate.getDate() + 1; //If the value is less than 10 so add a 0
        
        const dateFinal = `${year}-${month}-${day}`;
        return dateFinal;
    } 
}