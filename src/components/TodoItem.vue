<template>
  <li>
    <p>{{todo.detail}}</p>
    <button @click="remove(todo.id)">Delete</button>
    <button @click="handleEdit()" :disabled="newTodo.length < 1">
      Edit
    </button>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['todo', 'newTodo', 'clearInput'],
  methods: {
    ...mapActions([
      'remove',
      'edit',
    ]),

    handleEdit() {
      this.edit({ id: this.todo.id, item: this.newTodo });
      this.clearInput();
    },
  },
};
</script>
