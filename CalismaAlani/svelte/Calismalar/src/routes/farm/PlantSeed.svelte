<script lang="ts">
    import { farm } from "./farm.svelte";
</script>

<button onclick={()=>farm.plantSeed()}>
    Plant Seed
</button>