/*
  This file content the store which will handle the global state of the application
*/

import { createStore } from 'vuex';

import { mutations } from './mutations';
import { actions } from './actions';

export const store = createStore({
  state () {

    return {
      tasks: [],
      taskSelected: {},
    }
  },

  mutations: mutations,

  actions: actions
});