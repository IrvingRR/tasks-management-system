import { getTasksService, createTaskService } from '@/services/tasks';

export const actions =  {

    getAllTasksAction: async function({ commit }) {
      const tasks = await getTasksService();
      commit('setTasks', tasks);
    },

    createTaskAction: async function() {
        // const newTask = await this.createTaskService();
        createTaskService();
    }
    
}