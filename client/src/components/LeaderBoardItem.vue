<template lang="html">
	<div id="leaderboard-list">
		<h2>LeaderBoard</h2>
		<ul>
			<list-item :leaderboards="leaderboards" v-for="(player, index) in leaderboards" :player="player" :key="index"></list-item>
		</ul>
	</div>
</template>

<script>
import { eventBus } from '@/main';
import LeaderBoardPlayer from './LeaderBoardPlayer'
export default {
	name: "leaderboard-list",
	props: ["leaderboards"],
	
	components:{
		'list-item': LeaderBoardPlayer
	}
	
}
</script>

<style lang="css" scoped>
</style>