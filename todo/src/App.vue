<template>
  <div id="app">
      <!-- The navbar -->
      <Navbar/>       
    <!-- End of navigation bar -->
    <router-view/>
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
.index-content {
  display: flex;
  justify-content: center;
}
.card {
  width: 20%;
  border-radius: 10px;
 
}
.btn-large {
  font-style: bold;
}
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
