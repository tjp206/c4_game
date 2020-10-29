<template>
  <div id="app">
    <div>
    <h1>~ Connect Force ~</h1>
    <h2>May The Fours Be With You!</h2><br>
      <div>
      <!-- <form>
        <input type="text" v-model="playerOne" id="playerOne" placeholder="Player One" required />
        <input type="text" v-model="playerTwo" id="playerTwo" placeholder="Player Two" required />        
      </form><br> -->
      <p v-if="playerOne && playerTwo" class="player-names"><b id="p1">{{playerOne.name}}</b> <b id="vs">vs</b> <b id="p2">{{playerTwo.name}}</b></p>
    </div>
    <game-function v-if="playerOne && playerTwo" :playerOne="playerOne" :playerTwo="playerTwo"></game-function>
    </div>
    <aside id="aside">
    <leaderboard-form/>
    <leaderboard-item :leaderboards="leaderboards"/>
    </aside> 
  </div>
</template>

<script>
import { eventBus } from './main'
import Game from './components/GameFunction'
import LeaderBoardForm from './components/LeaderBoardForm'
import LeaderBoardItem from './components/LeaderBoardItem.vue';
import GameService from './services/GameService'
   var tableRow = document.getElementsByTagName('tr');
    var tableCell = document.getElementsByTagName('td');
    var tableSlot =  document.querySelector('.slot');
    var playerTurn = document.querySelector('.player-turn');
    var reset = document.querySelector('.reset')
    var currentPlayer = 1;
    var player1Color = 'green'
    var player2Color = 'red'
    var fullSlot = []
    
export default {
  data(){
    return {
    players: 0,
    playerOne:null,
    playerTwo:null,
    leaderboards: []
    }
  },
  name: 'App',
  components: {
    "game-function":Game,
    "leaderboard-form": LeaderBoardForm,
    "leaderboard-item": LeaderBoardItem
  },


  mounted(){
    this.fetchPlayers();
    eventBus.$on('listen', event => this.changeColor(event));
    eventBus.$on('create-player', (player) => {
      GameService.postPlayer(player)
        .then(player => this.leaderboards.push(player));
    });
    eventBus.$on('player-selected', (player) => {
      if (this.playerOne !== null){
        this.playerTwo = player}
        else{
          this.playerOne = player}
      });
      // this.player = player
      // console.log(this.player)
    },
  
  methods: {
    fetchPlayers() {
    GameService.getPlayer()
    .then(players => this.leaderboards = players);
    },

    changeColor:  function(event){
    let column = event.target.cellIndex;
    let row = []
      for (let i = 5; i > -1; i--){
        if (tableRow[i].children[column].style.backgroundColor === 'white'){
          row.push(tableRow[i].children[column])
            if (currentPlayer === 1){
              row[0].style.backgroundColor = player1Color
              if (this.horizontalCheck() || this.verticalCheck() || this.diagonalCheckOne() || this.diagonalCheckTwo()){
                this.playerWin(this.playerOne)
                return this.$alert(`${this.playerOne.name} is the Winner!!! `);
                } 
                else if(this.drawCheck()){
                  return this.$alert(`The Game is a draw!!!`)
                } 
        return currentPlayer = 2
                }
          else {
            row[0].style.backgroundColor = player2Color
            if (this.horizontalCheck() || this.verticalCheck() || this.diagonalCheckOne() || this.diagonalCheckTwo()){
              this.playerWin(this.playerTwo)
                return this.$alert(`${this.playerTwo.name} is the Winner!!! `);
                } 
                else if(this.drawCheck()){
                  return this.$alert(`The Game is a draw!!!`)
                } 
                else{
              return currentPlayer = 1
            }
         }
        }
      }
    },

    playerWin: function(player){
      player.wins = player.wins +=1
      console.log(player.wins)
      console.log(player)
      GameService.updatePlayer(player)


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
      for(let i=0; i < tableCell.length; i++){
        if(tableCell[i].style.backgroundColor !=='white'){
          fullSlot.push(tableCell[i])
          if(fullSlot.length === tableCell.length){
              return true
          }
          return false
          }
        }
      }
    }
}
</script>

<style>
li{
  list-style-type: none;
  font-weight: 900;
}
#aside{
  height: 50px;
  text-align: left;
  align-items: left;
  
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url('~@/assets/yodaCrop.png'), url('~@/assets/DarthCrop.png');
  background-position: top left , top right;
  background-size: 50%, 50%;
  background-repeat: no-repeat, no-repeat;
  width: 100vw;
}

*{
  margin: 0%;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, #vs, #aside {
  color: whitesmoke;
  text-align: center;
  text-shadow: 0 0 3px rgb(96, 96, 253);
}

.player-names {
  font-size: 32px;
  text-align: center;
  text-shadow: 0 0 3px rgb(96, 96, 253);
}

.game {
  position: relative;
  order: 1;
  justify-content: space-around;
  width: 650px;
  height: 600px;
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

input[type=text] {
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 3px 3px 5px rgb(96, 96, 253);
}

.save {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  top: 10vh;
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

.save:hover {
  background-color: white;
  color: rgb(96, 96, 253);;
  border: 1px;
  border-style:solid;
  border-color: rgb(96, 96, 253);
}

#p1 {
  color: lightgreen;
}

#p2 {
  color: red;
}

#dragtarget-red{
  flex-direction: column;
  justify-content: space-around;
  border-radius: 50%;
  display: inline;
  background: transparent;
}

#dragtarget-yellow{
  flex-direction: column;
  justify-content: space-around;
  border-radius: 50%;
  display: inline;
  background: transparent;
}

.flex-container {
  display: flex;
  justify-content: space-around;
}

#red{
  order: -1;
  margin: 0px;
  transition: transform .2s;
  width: 200px;
  height: 200px;
  /* margin: 0 auto; */
}

#red:hover {
  transform: scale(2.0);
}

#yellow {
  order: 2;
  margin: 0px;
  transition: transform .2s;
  width: 200px;
  height: 200px;
  /* margin: 0 auto; */
}

#yellow:hover {
  transform: scale(2.0); 
}

#create {
  margin: 15px;
}
</style>
