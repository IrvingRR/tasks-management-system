export const mutations = {

    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    addNewTask(state, task) {
        state.tasks.push(task);
    }

}