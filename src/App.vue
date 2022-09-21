<template>

<div> 
  <nav id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
   <div class="out">
    <button @click="$store.dispatch('logout')">Logout</button>
   </div>


  </nav>
  <router-view/>
</div>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {


  setup(){
    const store= useStore()
onBeforeMount(()=>{
  store.dispatch('fetchUser')

})


  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;


}

nav a.router-link-exact-active {
  color: #42b983;
}


button{
  display: flex;
  justify-content:space-between;



background-color: #a5aee9;
  font-family: sans-serif;
  margin: 10px 15px;
font-size: 19px;
  padding: 10px 10px;
  border: none;
  color: #3f0808;
  border-radius: 11px;
  cursor: pointer;


}


.out{
  display: flex;
  justify-content: right;

  margin-left: 20px;
  
}
</style>
