<template>
  <div>
    <h1>Todos:</h1>
    <input type="text" v-model="newTodo">
    <button @click="handleAdd" :disabled="newTodo.length < 1">Add</button>
    <ul v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" :newTodo="newTodo" :clearInput="clearInput"/>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TodoItem from './TodoItem.vue';

export default {
  name: 'todo',
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: '',
    };
  },
  computed: {
    ...mapState([
      'todos',
    ]),
  },
  methods: {
    ...mapActions([
      'add',
    ]),
    handleAdd() {
      this.add(this.newTodo);
      this.clearInput();
    },
    clearInput() {
      this.newTodo = '';
    },
  },
};
</script>
