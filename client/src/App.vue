<template>
  <div id="app">
    <h1>C-4 Time To Go Booom!!!!</h1>

    <h3 class="player_turn"> PLayer name</h3>

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
*{
  margin: 0%;
  padding: 0;
  box-sizing: border-box;
}
h1{
  text-align: center;
}

.game{
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%);
  width: 650px;
  height: 600px;
  background: lightskyblue;
  border: 1px solid black;
  box-shadow: 7px 7px black;
  padding: 1.5rem;
}

.slot{
  width: 90px;
  height: 90px;
  background: white;
  border: 1px;
  border-style:solid;
  border-color: black;
  border-radius: 50%;
}

.reset{
  position: absolute;
  top: 90vh;
  left: 50%;
  transform: translate(-50%);
  border: 1px;
  border-style:solid;
  border-color: black;
  width: 5rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 3px 3px black;
}
</style>
