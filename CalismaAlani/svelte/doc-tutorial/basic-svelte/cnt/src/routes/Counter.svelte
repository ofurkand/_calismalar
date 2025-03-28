<script>
	import { counter } from './shared.svelte.js';
    let count2 = 0;
</script>

<button onclick={() => counter.count += 1}>
	clicks: {counter.count}
</button>
<button onclick={() => count2 += 1}>
	clicks: {count2}
</button>
<br>