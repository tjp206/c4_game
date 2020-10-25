<template>
<div>
    <h1>C-4!!!!</h1>
    <h3 class="player-turn"></h3>
    <p>{{playerOne}} vs {{playerTwo}}</p>

    
    <p>{{tableCell}}</p>
    <div class="game">
      <table>
    <!-- <button v-on:click="listen">Listen</button> -->
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
      <div class="reset">Reset</div>
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
    // let currentPlayer = 1;
    // playerTurn.textContent = `${playerOne}'s turn!`;

        // for (let i=0; i < tableCell.length; i++){
        // console.log("listeners")
        // tableCell[i].addEventListener('click', (e) => {            
        //     console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`)
        // tableCell[i].addEventListener('click', changeColor);
        // cell.style.backgroundColor = 'white'
        // })}
        // }

        // Array.prototype.forEach.call(tableCell, (cell) =>{
        //     eventBus.$emit('listen', (event));
        //     cell.style.backgroundColor = 'white'
        //             }
        //     )}


        for (let i=0; i < tableCell.length; i++){
        console.log("listeners")
        //This needs to go in!!!!!!!!
        tableCell[i].style.backgroundColor = 'white'
        tableCell[i].addEventListener('click', (event) => {
            eventBus.$emit('listen', event);
            console.log(event)
            
                    }
            )}

    }
}
    



    



    // methods: {

    //     listen: function(){
    //     console.log(tableCell)
    //     Array.prototype.forEach.call(this.tableCell, (cell) =>{
    //         eventBus.$emit('click', changeColor);
    //         cell.style.backgroundColor = 'white'
    //                 }
    //             )}

    // }

</script>

<style>

</style>