<template lang="html">
	<div id="leaderboard-list">
		<h2>LeaderBoard</h2>
		<ul>
			<list-item :leaderboards="leaderboards" v-for="(player,index) in leaderboards" :player="player" :key="index"></list-item>
			<!-- <input type="submit" name="leaders" value="leaders" v-onClick="sortLeader()" /> -->
		</ul>
	</div>
</template>

<script>
import { eventBus } from '@/main';
import LeaderBoardPlayer from './LeaderBoardPlayer'

// const wins = [];
// document.getElementById("player").innerHTML = wins;

export default {
	name: "leaderboard-list",
	props: ["leaderboards"],
	
	components:{
		'list-item': LeaderBoardPlayer
	},
	// methods: {
	// 	sortLeader: function() {
  	// 		// wins.sort(function(a, b){return a-b});
  	// 		wins.sort((a, b) => a - b);
  	// 		document.getElementById("player").innerHTML = wins;
	// 	}
	// }
	
}
</script>

<style lang="css" scoped>
</style>