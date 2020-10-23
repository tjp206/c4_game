<template>
  
</template>

<script>
export default {
    data(){
        return
    },

mounted(){
    let tableRow = document.getElementsByTagName('tr')
    var tableCell = document.getElementsByTagName('td')
    let tableSlot = document.querySelector('.slot')
    let playerTurn = document.querySelector('.player-turn')

    for (let i=0; i < tableCell.length; i++){
        tableCell[i].addEventListener('click', (e) => {
            console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`)
        });
    }

    
} 
}
</script>

<style>

</style>