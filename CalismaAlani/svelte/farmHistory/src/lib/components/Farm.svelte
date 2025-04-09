<script>

    import Seeds from "./Seeds.svelte";
    import Time from "./Time.svelte";

</script>

<Time/>

<div class="farm" style="margin-top: 50px;">
    <Seeds/>
</div>

<style>
    .farm{
        display: flex;
        gap: 20px;
        border: solid darkgreen;
        background-color: green;
        min-width: 80vw;
        min-height: 500px;
        justify-content: left;
        align-items: center;
        padding: 20px;
    }
</style>