<template>
  <div id="app">
    <h1>C-4 Time To Go Booom!!!!</h1>

    <h3 class="player-turn"></h3>

    <div class="game">
      <table>
      <tr>
        <td class="slot" :v-on:click="changeColor"></td>
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
import GameFunction from './components/GameFunction'

export default {
  name: 'App',
  components: {
    HelloWorld,
},

mounted(){
let tableCell = document.getElementsByTagName('td');
let tableRow = document.getElementsByTagName('tr');
let tableSlot = document.querySelector('.slot');
let playerTurn = document.querySelector('.player-turn');


const player1Color = 'red'
const player2Color = 'yellow'


  for (let i=0; i < tableCell.length; i++){
      tableCell[i].addEventListener('click', (event) => {
          // console.log(`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`)
          console.log(`${event.target}`);
            changeColor(`${event.target}`)
      });
  }

Array.prototype.forEach.call(tableCell, (cell) =>{
cell.addEventListener('click', this.changeColor("event"));
cell.style.backgroundColor = 'white'
})
console.log(Array.prototype.forEach);
    // while(!player1){
    //   let player1 = prompt("Player one enter name u will be red")
    // }

    // while(!player2){
    //   let player2 = prompt("Player two enter name you will be yellow")
    // }
    
  },

methods: {

// selectors(){

// },

changeColor: function(event){
  let column = event.cellIndex;
  let row = []
  let currentPlayer = 1
  playerTurn.textContent = `${player1}'s turn!`
  console.log("column");

  for (let i = 5; i > -1; i--){
    if (tableRow[i].children[column].style.backgroundColor === 'white')
      row.push(tableRow[i].children[column])
        if (currentPlayer === 1){
          row[0].style.backgroundColor = player1Color
          console.log("return here");
          if (horizontalCheck() || verticalCheck() || diagonalCheckOne() || diagonalCheckTwo()){
            playerTurn.textContent = `${player1} WINS!`
            return alert (`${player1} WINNER!!! `)
            } 
            else if(drawCheck()){
              playerTurn.textContent = "Game is a Draw"
              return alert ("DRAW")
            } 
            else{
          playerTurn.textContent = `${player2}' turn`;
          return currentPlayer = 2
            }
      }
      else{
        row[0].style.backgroundColor = player2Color
        playerTurn.textContent = `${player1}'s turn`
        if (horizontalCheck() || verticalCheck() || diagonalCheckOne() || diagonalCheckTwo()){
            playerTurn.textContent = `${player2} WINS!`
            return alert (`${player2} WINNER!!! `)
            } 
            else if(drawCheck()){
              playerTurn.textContent = "Game is a Draw"
              return alert ("DRAW")
            } 
            else{
          playerTurn.textContent = `${player2}' turn`;
          return currentPlayer = 1
      }
      }
}
},
 
    
// checks the four colours are the same
colorMatchCheck: function(one, two, three, four){
  return(one === two && one === three && one === four && one !== "white")
},

horizontalCheck: function(){
  for (let row=0; row< tableRow.length; row++){
    for (let col = 0; col<4; col++){
      if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
      tableRow[row].children[col+1].style.backgroundColor,
      tableRow[row].children[col+2].style.backgroundColor,
      tableRow[row].children[col+3].style.backgroundColor)){
        return true 
      }
    }
  }
},

verticalCheck: function(){
  for(let col=0; col< 7; col++){
    for(let row=0;  row<3; row ++){
      if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor, 
      tableRow[row+1].children[col].style.backgroundColor, 
      tableRow[row+2].children[col].style.backgroundColor,
      tableRow[row+3 ].children[col].style.backgroundColor,)){
        return true;
      }
    }
  }
},

diagonalCheckOne: function(){
  for(let col=0; col<4; col++){
    for(let row=0; row<3; row++){
      if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
      tableRow[row+1].children[col+1].style.backgroundColor,
      tableRow[row+2].children[col+2].style.backgroundColor,
      tableRow[row+3].children[col+3].style.backgroundColor)){
        return true
      }
    }
  }
},

diagonalCheckTwo: function(){
  for(let col=0; col<4; col++){
    for(let row=5; row>2; row--){
      if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
      tableRow[row-1].children[col+1].style.backgroundColor,
      tableRow[row-2].children[col+2].style.backgroundColor,
      tableRow[row-3].children[col+3].style.backgroundColor)){
        return true
      }
    }
  }
},

drawCheck: function(){
  let fullSlot = []
  for(i=0; i<tableCell.length; i++){
    if(tableCell[i].style.backgroundColor !=='white'){
      fullSlot.push(tableCell[i])
    }
  }
  if(fullSlot.length === tableCell,length){
    return true 
  }
},

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
