export const mutations = {

    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    addNewTask(state, task) {
        state.tasks.push(task);
    },

    setTaskSelected(state, task) {
      state.taskSelected = task;
      console.log(state.taskSelected);
    },

    deleteTask(state, id) {
      state.taskSelected = {};
      state.tasks = state.tasks.filter(task => task.id !== id);
    },

    updateTask(state, task) {
      state.tasks = state.tasks.map(item => {
        if(item.id === task.id) {
          return item = task;
        };
      })
    }

}