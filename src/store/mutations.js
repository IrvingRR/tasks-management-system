/*
  This file content all the mutations which are will handle  the changes in the global state
*/

export const mutations = {

    // Set the tasks when are received from api
    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    // Add the new task to the array of tasks in the current state
    addNewTask(state, task) {
        state.tasks.push(task);
    },

    // Set the taskSelected when a task is selected
    setTaskSelected(state, task) {
      state.taskSelected = task;
    },

    // Delete a specific task from the current state
    deleteTask(state, id) {
      state.taskSelected = {};
      state.tasks = state.tasks.filter(task => task.id !== id);
    },

    // Update a specific task in the current state
    updateTask(state, task) {
      state.tasks = state.tasks.map(item => {
        if(item.id === task.id) {
          return item = task;
        };
      })
    }

}