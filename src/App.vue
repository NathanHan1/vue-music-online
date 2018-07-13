<template>
	<div id="app">
		<m-header></m-header>
		<tab></tab>
		<keep-alive>
			<transition name="slide">
            	<router-view></router-view>
			</transition>
        </keep-alive>
        <player></player>
	</div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'

export default {
	components: {
		MHeader,
		Tab,
		Player
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.slide-enter-active, .slide-leave-active
		transition: all .5s
	.slide-enter, .slide-leave-to
		opacity: 0
</style>
