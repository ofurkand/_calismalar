<script>
	export let value;
</script>

<button class="cell" on:click>
	{value}
</button>

<style>
	.cell {
		width: 80px;
		height: 80px;
		font-size: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid black;
		cursor: pointer;
		background-color: white;
	}
</style>
