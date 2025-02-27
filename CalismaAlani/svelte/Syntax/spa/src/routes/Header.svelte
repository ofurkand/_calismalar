<script lang="ts">
    let {name,fake_name }:{
        name: string;
        fake_name?: string | null;
    } =  $props();    
    let status: 'OPEN' | 'CLOSED' = $state('OPEN');

    function onclicck(){
        status = status === "OPEN" ? "CLOSED": "OPEN";
    };

</script>

<h1>HEADER {name}{status}</h1>

<input type="text" bind:value={name}>

{fake_name}

<style>

</style>