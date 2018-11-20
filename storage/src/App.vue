<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 * {  padding: 0;  margin: 0;  box-sizing: border-box;}
  textarea {font-family: 微软雅黑;}
  a {  text-decoration: none;}
  .clearfix:before,.clearfix:after {  content: ' ';  display: table;}
  .clearfix:after {  clear: both;}
  input{outline:none;}
  ol,ul {  list-style: none;}
  
  #app {
    display: flex;
  }
  .clearfix{
    display: block;
    clear: both;
    content: none;
  }
  .left {
    width: 260px;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ddd;
    padding: 10px;
  }

  .right {
    flex: 1;
    height: 100vh;
    overflow: auto;
    padding: 10px;
  }
</style>
