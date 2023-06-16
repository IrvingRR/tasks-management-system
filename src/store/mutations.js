export const mutations = {

    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    addNewTask(state, task) {
        state.tasks.push(task);
    },

    setLocalStorage(state) {
      localStorage.setItem('tasks-system-project', JSON.stringify(state.tasks));
    }

}