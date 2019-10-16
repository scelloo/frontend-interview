<template>
  <div id="app">
    <div id="nav">
      <!-- The navbar -->
      <Navbar/>       
    <!-- End of navigation bar -->
    <router-view/>
       </div>
      <div class="index-container">
        <h5 style="text-align: center;">Add your daily todo</h5>
      <div class="card">
        <div class="card-content">
     <i class="material-icons delete" >delete</i>
     <h2 class="indigo-text"></h2>
     <ul class="ingredients">
       <li >
         <span class="chip"></span>
       </li>
     </ul>
        </div>
<span class="btn-floating btn-large halfway-fab red">
      
     </span>
      </div>
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
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
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
