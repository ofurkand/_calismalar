<script lang="ts">
    let {
        name,
        fake_name = null
    }:{
        name?:string;
        fake_name?:string | null;
    } = $props();
    let cnt: number = $state(0); // Başlangıç değeri verilmiş olmalı


</script>
<div>
    <h3>Hello again from Header file, {name} {cnt}{fake_name === null ? null : ", "+fake_name}</h3>
</div>
<!-- {()=>{cnt+=1;}} -->
<!-- <style>

</style> -->