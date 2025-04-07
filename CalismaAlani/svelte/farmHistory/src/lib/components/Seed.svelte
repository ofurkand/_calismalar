<script lang="ts">
    export const seedInfo = $props();
    let seed = seedInfo.seedInfo;
</script>

<div id={seed.id} class="seed" style="background-color: {seed.color?seed.color:"yellow"};">
    <h1>{seed.name}</h1>
</div>

<style>
    .seed{
        height: 300px;
        width: 200px;
    }
</style>