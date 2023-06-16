import { getTasksService, createTaskService } from '@/services/tasks';

export const actions =  {

    getAllTasksAction: async function({ commit }) {
      const tasks = await getTasksService();
      console.log(tasks);
      commit('setTasks', tasks);
    },

    createTaskAction: async function({ commit }, task) {
        const response = await createTaskService(task);
        commit('addNewTask', response.task);
        
    }
    
}