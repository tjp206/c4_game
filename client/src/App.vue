<template>
  <div id="app">
    <div>
      <form>
        <input type="text" v-model="playerOne" id="playerOne" placeholder="Player One"/>
        <input type="text" v-model="playerTwo" id="playerTwo" placeholder="Player Two"/>        
      </form>

    </div>

    <game-function v-if="playerTwo" :playerOne="playerOne" :playerTwo="playerTwo"></game-function>
    
  </div>
</template>

<script>
import { eventBus } from './main'
import Game from './components/GameFunction'
   var tableRow = document.getElementsByTagName('tr');
    var tableCell = document.getElementsByTagName('td');
    var tableSlot =  document.querySelector('.slot');
    var playerTurn = document.querySelector('.player-turn');
    var reset = document.querySelector('.reset')
    var currentPlayer = 1;
    var player1Color = 'red'
    var player2Color = 'yellow'
    

export default {
  data(){
    return {
    playerOne:"",
    playerTwo:"",
    }
  },
  name: 'App',
  components: {
    "game-function":Game,
  },


  mounted(){
    //Get Saved Player and Game Details.
    // this.getGames();
    // this.getPlayers();

    eventBus.$on('listen', event => this.changeColor(event));
  },



  methods: {

    changeColor:  function(event){
    console.log("changeColor")
    console.log(event)
    console.log(`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`)
    let column = event.target.cellIndex;
    let row = []

      for (let i = 5; i > -1; i--){
        if (tableRow[i].children[column].style.backgroundColor === 'white'){
          row.push(tableRow[i].children[column])
            if (currentPlayer === 1){
              console.log(row)
              console.log(currentPlayer)
              console.log(this.playerOne)
              row[0].style.backgroundColor = player1Color
              if (this.horizontalCheck() || this.verticalCheck() || this.diagonalCheckOne() || this.diagonalCheckTwo()){
                return alert (`${this.playerOne} IS THE WINNER!!! `)
                } 
                else if(this.drawCheck()){
                  playerTurn.textContent = "Game is a Draw"
                  return alert ("DRAW")
                } 
        return currentPlayer = 2
                }
          else {
            console.log(row)
            console.log(currentPlayer)
            row[0].style.backgroundColor = player2Color
            if (this.horizontalCheck() || this.verticalCheck() || this.diagonalCheckOne() || this.diagonalCheckTwo()){
                return alert (`${this.playerTwo} IS THE WINNER!!! `)
                } 
                else if(this.drawCheck()){
                  playerTurn.textContent = "Game is a Draw"
                  return alert ("DRAW")
                } 
                else{
              return currentPlayer = 1
            }
         }
        }
      }
    },
  
    colorMatchCheck: function(one, two, three, four){
      return(one === two && one === three && one === four && one !== "white")
    },

    horizontalCheck: function(){
      for (let row=0; row < tableRow.length; row++){
        for (let col = 0; col<4; col++){
          if(this.colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
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
          if(this.colorMatchCheck(tableRow[row].children[col].style.backgroundColor, 
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
          if(this.colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
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
          if(this.colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
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
      for(let i=0; i < tableCell.length; i++){
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
  background: blue;
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
