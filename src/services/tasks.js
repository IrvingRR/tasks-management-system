const AUTHORIZATION_TOKEN = 'Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd';
const URL = 'https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks';

export const getTasksService = async () => {
    try {
        const request = await fetch(URL, {
            method: 'GET',
            headers: {
                authorization: AUTHORIZATION_TOKEN
            }
        });

        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const createTaskService = async (task) => {
    try {
        
        console.log('This is the task which we are creating', task);

    } catch (error) {
        console.log(error);
    }
}