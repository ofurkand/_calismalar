<script lang="ts">
	import type { Snippet } from "svelte";

    let {
        name,
        fake_name = null,
        children,
        secondChild
    }:{
        name?:string;
        fake_name?:string | null;
        children: Snippet;
        secondChild: Snippet;
    } = $props();
    let cnt: number = $state(0); // Başlangıç değeri verilmiş olmalı
</script>

<div>
    <h3>Hello again from Header file, {name} {cnt}{fake_name === null ? null : ", "+fake_name}</h3>
    {@render children()}
</div>
<!-- {()=>{cnt+=1;}} -->
<!-- <style>

</style> -->