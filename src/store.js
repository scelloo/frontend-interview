import Vue from 'vue';
import Vuex from 'vuex';
import { getItem, setItem } from './helpers/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: getItem('todos') || [],
  },
  mutations: {
    appendTodo(state, todo) {
      const item = { id: state.todos.length + 1, detail: todo };
      state.todos.push(item);
      setItem('todos', state.todos);
    },
    removeTodo(state, id) {
      const newTodos = state.todos.filter(todo => todo.id !== id);
      state.todos = newTodos;
      setItem('todos', state.todos);
    },
    editTodo(state, payload) {
      const todo = state.todos.findIndex(item => item.id === payload.id);
      state.todos[todo].detail = payload.item;
      setItem('todos', state.todos);
    },
  },
  actions: {
    add({ commit }, todo) {
      commit('appendTodo', todo);
    },
    remove({ commit }, id) {
      commit('removeTodo', id);
    },
    edit({ commit }, todo) {
      commit('editTodo', todo);
    },
  },
});
