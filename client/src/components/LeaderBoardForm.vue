<template>
  <div>
    <form id=create v-on:submit.prevent="handleSubmit">
    <label for="name">Create Player</label>
    <input type="text" id="name" name="name" v-model="name" required/>
    <input type="submit" name="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import { eventBus } from '@/main';
export default {

	data(){
		return {
			name: "",
      wins: 0,
    }
  },

methods: {
handleSubmit() {
  eventBus.$emit('create-player', this.$data);
  this.name = name;
  this.wins = null;
}
},

}
</script>

<style>

</style>