<script lang="ts">
    import { farm } from "./farm.svelte";
</script>

{#each farm.seeds as seed}
    <div class="plant">{seed}</div>
{/each}

<style>
    .plant{
        height: 400px;
        width: 200px;
        background-color: yellow;
    }
</style>