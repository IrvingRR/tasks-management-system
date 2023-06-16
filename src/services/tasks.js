import { toast } from 'vue3-toastify';
const AUTHORIZATION_TOKEN = 'Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd';
const URL = 'https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks';
const TOKEN = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd';

export const getTasksService = async () => {
    try {
        const request = await fetch(`${URL}?token=${TOKEN}`, {
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
        const request = await fetch(URL, {
            method: 'POST',
            headers: {
                authorization: AUTHORIZATION_TOKEN,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: task
        });

        const response = await request.json();
        toast.success(response.detail, {
            autoClose: 3000,
        });

        return response;

    } catch (error) {
        console.log(error);
    }
}

export const getTaskByIdService = async (id) => {
    
    try {
        const request = await fetch(`${URL}/${id}?token=${TOKEN}`, {
            method: 'GET',
            headers: {
                authorization: AUTHORIZATION_TOKEN
            },
        });

        const response = await request.json();
        return response;

    } catch (error) {
        console.log(error);
    }
}

export const updateTaskService = async (id, task) => {
    try {
        const request = await fetch(`${URL}/${id}?token=${TOKEN}`, {
            method: 'PUT',
            headers: {
                authorization: AUTHORIZATION_TOKEN,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: task
        });

        const response = await request.json();
        toast.success(response.detail, {
            autoClose: 3000,
        });

        return response;

    } catch (error) {
        console.log(error);
    }
}

export const deleteTaskByIdService = async (id) => {
    
    try {
        const request = await fetch(`${URL}/${id}?token=${TOKEN}`, {
            method: 'DELETE',
            headers: {
                authorization: AUTHORIZATION_TOKEN
            },
        });

        const response = await request.json();
        
        toast.success(response.detail, {
            autoClose: 3000,
        });

        return response;
        
    } catch (error) {
        console.log(error);
    }
}