<script lang="ts">
    export const seedIn:seed = $props();
    console.log(seedIn);
</script>

<div id={seedIn.id} class="seed" style="background-color: {seedIn.color?seedIn.color:"yellow"};">
    <h1>{seedIn.name}</h1>
</div>

<style>
    .seed{
        height: 300px;
        width: 200px;
    }
</style>