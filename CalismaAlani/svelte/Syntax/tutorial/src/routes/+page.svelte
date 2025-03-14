<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

<script lang="ts">
    let aslisim = "Furkan";
    let soyisim: string = $state("Durmuş"); // Reactivity
    let status: 'OPEN' | 'CLOSED' = $state('OPEN');
    import Header from "./Header.svelte";
    // function toggle(){
    function onclick(){
        status = status === "OPEN" ? "CLOSED" : "OPEN";
    }
    import FormState from "./FormState.svelte";
</script>

<Header name="Ömer"/>
<Header name={aslisim}/>
<Header name={soyisim}/>
<Header fake_name="Oruç"/>

<input type="text" bind:value={soyisim} />

<p>The store is now {status}</p>
<!-- <button onclick={toggle}>Tıkla</button> -->
<button {onclick}>Tıkla</button>

<FormState/>



<style>
    :global(div){
        background-color: lightblue;
    }
    :global(.error){
        color:red;
    }
</style>