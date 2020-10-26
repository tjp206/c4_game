<template>
<div>
    <h3 class="player-turn"></h3>
    <p class="player-names"><b>{{playerOne}} vs {{playerTwo}}</b></p>

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
      <!-- <div class="reset">Reset</div> -->
    </div> 
</div>
</template>

<script>
import { eventBus } from '../main.js'
   var tableRow = document.getElementsByTagName('tr');
    var tableCell = document.getElementsByTagName('td');
    var tableSlot =  document.querySelector('.slot');
    var playerTurn = document.querySelector('.player-turn');
    var reset = document.querySelector('.reset')
    
    



export default {
    name: "game-function",
    props: ["playerOne", "playerTwo"],
    components: {
    },


  data(){
    return {
    tableRow: document.getElementsByTagName('tr'),
    tableCell: document.getElementsByTagName('td'),
    tableSlot:  document.querySelector('.slot'),
    playerTurn: document.querySelector('.player-turn'),
    reset: document.querySelector('.reset')
    
    }
  },
    
  mounted(){
        for (let i=0; i < tableCell.length; i++){
        tableCell[i].style.backgroundColor = 'white'
        tableCell[i].addEventListener('click', (event) => {
            eventBus.$emit('listen', event);
            console.log(event)     
                    }
            )}
    }
}
</script>

<style>
playerOne {
  color: red;
}
</style>