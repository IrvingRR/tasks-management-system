import { getTasksService, createTaskService, getTaskByIdService, deleteTaskByIdService, updateTaskService } from '@/services/tasks';

export const actions =  {

    getAllTasksAction: async function({ commit }) {
      const tasks = await getTasksService();

      commit('setTasks', tasks);
      
    },

    createTaskAction: async function({ commit }, task) {
        const response = await createTaskService(task);
        commit('addNewTask', response.task);
    },

    getTaskByIdAction: async function({ commit }, id) {
      const task = await getTaskByIdService(id);
      commit('setTaskSelected', task[0]);
    },

    deleteTaskByIdAction: async function({ commit }, id) {
      deleteTaskByIdService(id);
      commit('deleteTask', id);
    },

    updateTaskAction: async function({ commit }, {id, task}) {
      const response = await updateTaskService(id, task);
      commit('setTaskSelected', response.task);
      // commit('updateTask', response.task);
    }
    
}