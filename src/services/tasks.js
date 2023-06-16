/*
This file content all services that allow us the do the different http requests to API

    @const AUTHORIZATION_TOKEN: Is header used to get authorization to do every request
    @const URL: Is the base url value
    @const TOKEN: is the token value used to acces to every endpoint request and can have authorization
*/

import { toast } from 'vue3-toastify';
const AUTHORIZATION_TOKEN = 'Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd';
const URL = 'https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks';
const TOKEN = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd';

// This service allow to get all tasks from API
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

/*
    This service allo to create a new task
    this service handle a content application/x-www-form-urlencoded so we have to use URLSearchParams

    @param {String}: Is the task which we want to save in the api in format application/x-www-form-urlencoded 
*/
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

/*
    This service allow to get a specific task by id
    this service need the token value and the id to indicate the task

    @param {Number} id: Is the id which allow us specific the task we want to get
*/
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

/*
    This service allow to update a task
    this service handle a content application/x-www-form-urlencoded so we have to use URLSearchParams

    @param {String}: Is the task which we want to save in the api in format application/x-www-form-urlencoded 
    @param {Number} id: Is the id which allow us specific the task we want to update
*/
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

/*
    This service allow to delete a new task. Only need the id of the task

    @param {Number} id: Is the id which allow us specific the task we want to delete
*/
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