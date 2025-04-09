<script lang="ts">
    import { allStates, isDayTimeRunning, addState, updateStateAtIndex } from "$lib";
    // let isStarted = $derived($isDayTimeRunning);
    let isStarted:boolean = $state(false);
    export const seedInfo = $props();
    let seed = seedInfo.seedInfo;
    let _index = $allStates.length;

    addState(isStarted);
    let switchx = $state(true);
    isDayTimeRunning.subscribe(value => {
        // console.log("myValue değişti:", value);
        if (value != switchx) {
            switchx = true;
        }
        isStarted = value;

        // updateAllStatesStatus();
    });

    function updateAllStatesStatus(){
        // allStates[_index].set(isStarted);
        updateStateAtIndex(_index,isStarted);
        return
        // console.log(allStates);
    }

    // $inspect(isStarted)

    // export let seedInfo:seed;


    // console.log(seed);
    let intervalId: number | null = null;
    let elapsed = $state(0);
    $effect(() => {
        if (isStarted) {
            if (switchx) {
                updateAllStatesStatus();
                switchx = false;
            }
            intervalId = setInterval(() => {
                elapsed += 1;
                if (elapsed === 100) {
                    elapsed = 0;
                    seed.initialAge += 1;
                }
            }, 20/seed.growthRate);
            return () => intervalId && clearInterval(intervalId);
        }
        });
</script>

<!-- <script module lang="ts">
    let allStates:boolean[] = [];
</script> -->

<div id={seed.id} class="seed" style="background-color: {seed.color?seed.color:"yellow"};">
    <h1>{seed.name}</h1>
    <button onclick={()=>{isStarted = !isStarted; updateAllStatesStatus();}}>
    {isStarted? "Durdur":"Başlat"}
    </button>
    <p>{elapsed}</p>
    <div style="display:flex;justify-content: center;">
        <progress max="100" value="{elapsed}"></progress>
    </div>
    <p style="text-align: center;">{seed.initialAge}</p>
</div>

<style>
    .seed{
        height: 300px;
        width: 200px;
    }
    progress{
        width: 97%;
}
</style>