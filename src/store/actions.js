/*
  This file content all actions to execute async / await functions 
*/

import { getTasksService, createTaskService, getTaskByIdService, deleteTaskByIdService, updateTaskService } from '@/services/tasks';

export const actions =  {

    // Execute the getTasksService to get all tasks
    getAllTasksAction: async function({ commit }) {
      const tasks = await getTasksService();

      commit('setTasks', tasks);
      
    },

    // Execute the createTaskService to create a new task
    createTaskAction: async function({ commit }, task) {
        const response = await createTaskService(task);
        commit('addNewTask', response.task);
    },

    // Execute the getTaskByIdService to get a specific task by id
    getTaskByIdAction: async function({ commit }, id) {
      const task = await getTaskByIdService(id);
      commit('setTaskSelected', task[0]);
    },

    // Execute the deleteTaskByIdService to delete a task
    deleteTaskByIdAction: async function({ commit }, id) {
      deleteTaskByIdService(id);
      commit('deleteTask', id);
    },

    // Execute the updateTaskService to update a task
    updateTaskAction: async function({ commit }, {id, task}) {
      const response = await updateTaskService(id, task);
      commit('setTaskSelected', response.task);
      // commit('updateTask', response.task);
    }
    
}