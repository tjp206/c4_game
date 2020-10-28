<template>
<div>
  <i class="fa fa-film" aria-hidden="true"></i>
  <li v-on:click="playerSelect">{{player.name}} &emsp; &emsp; ::{{player.wins}}</li>
</div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: 'list-item',
    props: ['player'],

    methods: {
    playerSelect(){
      eventBus.$emit('player-selected', this.player)
    },
  }
}
</script>

<style>

</style>