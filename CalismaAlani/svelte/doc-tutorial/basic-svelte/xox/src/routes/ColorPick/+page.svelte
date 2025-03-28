<script>
    import Button from "./components/Button.svelte";
    import { Colors } from "./components/shared.svelte";
	// let selected = $state(colors[0]);
</script>

<h1 style="color: {Colors.selected}">Pick a colour</h1>

<div>
	<Button/>
</div>

<style>
	h1 {
		transition: color 0.2s;
		font-size: 2rem;
		font-weight: 700;
	}

	div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
	}
</style>
