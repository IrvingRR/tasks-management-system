import { createStore } from 'vuex';

import { mutations } from './mutations';
import { actions } from './actions';

export const store = createStore({
  state () {

    return {
      tasks: JSON.parse(localStorage.getItem('tasks-system-project')) || [],
      taskSelected: {},
    }
  },

  mutations: mutations,

  actions: actions
});