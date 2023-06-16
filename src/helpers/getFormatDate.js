export const getFormatDate = (date) => {
    if(date) {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = (newDate.getMonth() + 1) < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1 ;
        const day = (newDate.getDate() + 1) < 10 ? `0${newDate.getDate() + 1}` : newDate.getDate() + 1;
        
        const dateFinal = `${year}-${month}-${day}`;
        return dateFinal;
    } 
}