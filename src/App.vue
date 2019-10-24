<template>
  <div id="app" class="container">
    <h1>TODO LIST</h1>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./components/TodoList/index";

export default {
  name: 'app',
  components: {
    TodoList
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}
.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
</style>
