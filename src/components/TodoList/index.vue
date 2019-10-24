<template>
  <div>
    <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
    <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <div v-for="(todo, index) in todosFiltered" :key="todo.id" class="todo-item">
      <div class="todo-item-left">
        <input type="checkbox" v-model="todo.completed">
        <div v-if="!todo.editing" @dblclick="editTodo(todo)" class="todo-item-label" :class="{ completed : todo.completed }">{{ todo.title }}</div>
        <input v-else class="todo-item-edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus>
      </div>
      <div class="remove-item" @click="removeTodo(index)">
        &times;
      </div>
    </div>
    </transition-group>

    <div class="extra-container">
      <div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos"> Check All</label></div>
      <div>{{ remaining }} items left</div>
    </div>

    <div class="extra-container">
      <div>
        <button :class="{ active: filter == 'all' }" @click="filter = 'all'">All</button>
        <button :class="{ active: filter == 'active' }" @click="filter = 'active'">Active</button>
        <button :class="{ active: filter == 'completed' }" @click="filter = 'completed'">Completed</button>
      </div>

      <div>
        <transition name="fade">
        <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
        </transition>
      </div>

    </div>
  </div>
</template>

<script>
import './TodoList.scss';

export default {
  name: 'todo-list',
  data () {
    return {
      newTodo: '',
      idForTodo: 3,
      beforeEditCache: '',
    }
  },
  computed: {
    remaining() {
      return this.$store.state.todos.filter(todo => !todo.completed).length
    },
    anyRemaining() {
      return this.remaining != 0
    },
    todosFiltered() {
      if (this.$store.state.filter == 'all') {
        return this.$store.state.todos;
      } else if (this.$store.state.filter == 'active') {
        return this.$store.state.todos.filter(todo => !todo.completed)
      } else if (this.$store.state.filter == 'completed') {
        return this.$store.state.todos.filter(todo => todo.completed)
      }
      return this.$store.state.todos
    },
    showClearCompletedButton() {
      return this.$store.state.todos.filter(todo => todo.completed).length > 0
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    checkStorage (key) {
      if (localStorage.getItem(key)) {
        try {
          this[key] = JSON.parse(localStorage.getItem(key))
        } catch (e) {
          localStorage.removeItem(key)
        }
      }
    },
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return
      }
      this.$store.state.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
      })
      this.newTodo = ''
      this.idForTodo++
    },
    editTodo(todo) {
      this.beforeEditCache = todo.title
      todo.editing = true
    },
    doneEdit(todo) {
      if (todo.title.trim() == '') {
        todo.title = this.beforeEditCache
      }
      todo.editing = false
    },
    cancelEdit(todo) {
      todo.title = this.beforeEditCache
      todo.editing = false
    },
    removeTodo(index) {
      this.$store.state.todos.splice(index, 1)
    },
    checkAllTodos() {
      this.$store.state.todos.forEach((todo) => todo.completed = event.target.checked)
    },
    clearCompleted() {
      this.$store.state.todos = this.$store.state.todos.filter(todo => !todo.completed)
    }
  },
  mounted () {
    this.newTodo.forEach(todo => this.checkStorage(todo))
  },
}
</script>
