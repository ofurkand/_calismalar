<script lang="ts">
    import { createCountStore } from "$lib/count-store.ts.svelte";

    // let count = $state(0);

    // function increment(){
    //     count += 1;
    // }
    // function decrement(){
    //     count-=1;
    // }
    // function square(){
    //     count*=count;
    // }
    // function reset(){
    //     count=0;
    // }

    export let count = createCountStore(0);
</script>

<h1>Count: {count}</h1>

<button onclick="{count.increment}">+1</button>
<button onclick="{count.decrement}">-1</button>
<button onclick="{count.square}">{count}<sup>2</sup></button>
<button onclick="{count.reset}">reset</button>