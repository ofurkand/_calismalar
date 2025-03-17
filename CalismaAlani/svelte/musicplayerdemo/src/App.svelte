<script lang="ts">
	// export let name;
	import {onMount} from "svelte"
    import MusicList from "./musiclist.svelte";
	
	let currentSongIndex = 0;
	let playerState = "play";
	let audioElement;
	let mainElement;
</script>

<main bind:this={mainElement}>
	<!-- <h1>Hello {name}!</h1> -->
	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	<audio src={"../public/storage/audio/"+ $MusicList[currentSongIndex]}>
	</audio>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>