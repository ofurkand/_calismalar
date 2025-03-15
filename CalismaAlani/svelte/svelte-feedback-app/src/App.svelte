<script>
	// let firstName = "Donald";
	// let lastName = "Mx";
	// let color = "blue";
	// let showText = false;
	// let users = [
	// 	{
	// 	id: '1',
	// 	name: 'Achilles'
	// 	},
	// 	{
	// 	id: '2',
	// 	name: 'Zeus'
	// 	},
	// 	{
	// 	id: '3',
	// 	name: 'Odin'
	// 	},
	// ]

	// $: name = firstName +' '+lastName;

	// const toggle = () => { color = color === 'blue' ? 'purple' : 'blue'; showText = !showText; users = [...users, {id:"4",name:"Ahura Mazda"}]}

	import FeedbackList from "./components/FeedbackList.svelte";
</script>

<main>
	<!-- <h1 style="color:{color}">Hello {name}!</h1> -->
	<h1>Hello</h1>
	<!-- {#if showText}
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{:else}
	<p>No text here.</p>
	{/if}
	<button on:click={toggle}>Purplise</button>

	{#each users as user (user.id)}
		<h3>{user.name}</h3>
	{/each} -->

	<FeedbackList />
</main>

<!-- <style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: red;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style> -->