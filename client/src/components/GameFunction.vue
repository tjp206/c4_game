<template>
<div>
    <h1>C-4!!!!</h1>
    <h3 class="player-turn"></h3>
    <p>{{playerOne}} vs {{playerTwo}}</p>
    <div>
		<div v-for="(list, index) in lists" :key="index">
			<drop class="drop list" @drop="handleDrop(list, ...arguments)">
				<drag v-for="item in list"
					class="drag"
					:key="item"
					:class="{ [item]: true }"
					:transfer-data="{ item: item, list: list, example: 'lists' }">
						{{ item }}
				</drag>
			</drop>
		</div>
    </div>
    
    
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
      <div class="reset">Reset</div>
    </div> 
</div>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';
import { eventBus } from '../main.js'
   var tableRow = document.getElementsByTagName('tr');
    var tableCell = document.getElementsByTagName('td');
    var tableSlot =  document.querySelector('.slot');
    // var playerTurn = document.querySelector('.player-turn');
    // var reset = document.querySelector('.reset')
    
    



export default {
    name: "game-function",
    props: ["playerOne", "playerTwo"],
    components: { Drag, Drop },

  data(){
    return {
    tableRow: document.getElementsByTagName('tr'),
    tableCell: document.getElementsByTagName('td'),
    tableSlot:  document.querySelector('.slot'),
    // playerTurn: document.querySelector('.player-turn'),
    // reset: document.querySelector('.reset')
    groups: ['Red', 'Yellow'],
    board: ['1','2','3','4','5','6','7'],
    dragging: null,
    				lists: [
					['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16'],
                    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16'],
                    ['1'],
                    ['2'],
                    ['3'],
                    ['4'],
                    ['5'],
                    ['6'],
                    ['7'],
				],
    
    }
  },

 		methods: {
			handleDrop(toList, data) {
				const fromList = data.list;
				if (fromList) {
					// toList.push(data.item);
					fromList.splice(fromList.indexOf(data.item), 1);
					toList.sort((a, b) => a > b);
				}
			},
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
</style>