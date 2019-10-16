<template>
  <div id="app">
    <div id="nav">
      <!-- The navbar -->
      <nav class="nav-extended indigo darken-2 up">
    <div class="nav-content">    
    <router-link :to="{ name: 'Index'}">
        <span class="nav-title">Todo app</span>
    </router-link>
    <a href="" class="btn-floating btn-large halfway-fab red">
        <router-link :to="{name: 'AddSmoothie' }">
            <i class="material-icons">add</i>
            </router-link>
    </a>  
    </div>
    </nav> 
    <!-- End of navigation bar -->
    
    <router-view/>
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>


<style>
.up {
  margin-top: -10px;
}

</style>
