<script lang="ts">
    import { allStates, isDayTimeRunning } from "$lib";
    let isValidated = $state(false);
    // let isStarted = $isDayTimeRunning;
    // allStates.subscribe( value => {
    //     isValidated = $allStates.every(v => v === $isDayTimeRunning);
    // });
    allStates.subscribe((value)=>{
        console.log("-");
        isValidated = value.every(v=>v==isValidated);
        console.log(value);
    });

    let intervalId: number | null = null;
    let elapsed = $state(0);
    $effect(() => {
            if ($isDayTimeRunning && elapsed<100) {
                intervalId = setInterval(() => {
                    elapsed += 1;
                }, 10);
                return () => intervalId && clearInterval(intervalId);
            }
        });
</script>
{$allStates}<br>
{$isDayTimeRunning} | {isValidated ? "Doğrulandı":" "}
<button onclick={()=>{
    isDayTimeRunning.set(!$isDayTimeRunning);
    }
}>Başlat</button>