<script>
    import DayProgress from "./DayProgress.svelte";
    import PlantSeed from "./PlantSeed.svelte";
    import ProgressTime from "./ProgressTime.svelte";
    import Seeds from "./Seeds.svelte";

</script>
<DayProgress></DayProgress>
<ProgressTime></ProgressTime>
<PlantSeed></PlantSeed>
<div class="farm" style="margin-top: 50px;">
    <Seeds></Seeds>
</div>

<style>
    .farm{
        display: flex;
        gap: 20px;
        border: solid darkgreen;
        background-color: green;
        min-width: 90vw;
        min-height: 500px;
        justify-content: left;
        align-items: center;
        padding: 20px;
    }
</style>

