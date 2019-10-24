<template>
  <div>
    <h1>Todos:</h1>
    <input type="text" v-model="newTodo">
    <button @click="handleAdd" :disabled="newTodo.length < 1">Add</button>
    <ul v-for="todo in todos" :key="todo.id">
      <li>{{todo.detail}}</li>
      <button @click="remove(todo.id)">Delete</button>
      <button @click="edit({id: todo.id, item: newTodo})" :disabled="newTodo.length < 1">
        Edit
      </button>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'todo',
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
      'remove',
      'edit',
    ]),
    handleAdd() {
      this.add(this.newTodo);
      this.newTodo = '';
    },
  },
};
</script>
