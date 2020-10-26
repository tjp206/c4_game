<template>
  <div id="app">
    <h1>Welcome to C-4</h1>
    <h1>Time To Go Booom!!!</h1>
    <h1>&#129327;</h1>

    <h3 class="player_turn"> Player Name:</h3>

    <div class="game">
      <table>
      <tr>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
      </tr>
      <tr>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
      </tr>    
       <tr>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
      </tr>   
        <tr>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
      </tr>    
      <tr>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
      </tr>    
      <tr>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
      </tr>
      </table> 
    </div>
    <div class="reset">Reset</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}; */

body {
  background-color: snow;
}

*{
  margin: 0%;
  padding: 0;
  box-sizing: border-box;
}
h1{
  text-align: center;
}

.game {
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translate(-50%);
  width: 650px;
  height: 600px;
  background: rgb(96, 96, 253);
  /* border: 1px solid black; */
  box-shadow: 10px 10px 20px black;
  padding: 1.5rem;
  border-radius: 1.5%;
}

.slot {
  width: 90px;
  height: 90px;
  background: whitesmoke;
  padding: 2.5rem;
  border: 2px;
  border-style: solid;
  border-color: black;
  border-radius: 50%;
  transition-duration: 0.4s;
}

.slot:hover {
  background-color: lightslategrey;
}

.reset {
  font-size: 16px;
  position: relative;
  top: 80vh;
  margin-bottom: 1rem;
  left: 50%;
  transform: translate(-50%);
  border: 1px;
  border-style:solid;
  background-color: rgb(96, 96, 253);
  color: white;
  border-color: white;
  border-radius: 8px;
  width: 5rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 3px 3px 5px black;
  transition-duration: 0.4s;
  padding: 12px;
}

.reset:hover {
  background-color: white;
  color: rgb(96, 96, 253);;
  border: 1px;
  border-style:solid;
  border-color: rgb(96, 96, 253);
}
</style>
