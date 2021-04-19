<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Button v-bind:list="list" v-on:setValue="setValue" />
    <button-a ></button-a>
    <button-c></button-c> -->
    <router-link  to='/button-a'>跳转btn</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Button from './components/Button'
// import ButtonA from './components/ButtonA'
// import ButtonC from './components/ButtonC'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // Button,
    // ButtonA,
    // ButtonC
    //测试提交
  },
  data(){
    return{
      list: [{name: 'java',id: 1001},{name: 'python',id: 1002},{name: 'javascript',id: 1003}]
    }
  },
  methods: {
    setValue(e){
      console.log('子像氟元素传递数据',e)
    }
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
  margin-top: 60px;
}

button-a{
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
