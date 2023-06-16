import { getTasksService, createTaskService } from '@/services/tasks';

export const actions =  {

    getAllTasksAction: async function({ commit }) {
      const tasks = await getTasksService();

      if(tasks.length === 0) {
        return commit('setTasks', JSON.parse(localStorage.getItem('tasks-system-project')));
      }

      commit('setTasks', tasks);
      
    },

    createTaskAction: async function({ commit }, task) {
        const response = await createTaskService(task);
        commit('addNewTask', response.task);
        commit('setLocalStorage');
    }
    
}