<script lang="ts">
    import Cell from "./Cell.svelte";

    let oyunAlani : number = $props();

    // let oyun = $state(Array([Array(oyunAlani).fill("")]*3));
    let oyun = $state(Array(oyunAlani).fill(Array(oyunAlani).fill("X")))
</script>

<div class="oyunAlani" style="grid-template-columns: repeat({oyunAlani}, 100px);)">
    {#each oyun as kare }
        <Cell deger=kare/>
    {/each} 
</div>

<style>
    .oyunAlani{
        /* border: 1px solid black; */
        display: grid;
        width: fit-content;
        container-type: inline-size; /* Genişliği baz alır */
    }
    :global(.kare) {
    height: 100px;
    }
</style>