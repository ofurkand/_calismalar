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
    // // // // //
    let durum= $state(-3);
</script>

Headers <hr>
<!-- <Header name="Ömer"/> -->
<!-- <Header name={aslisim}/> -->
<!-- <Header name={soyisim}>
    {#snippet secondChild()}
    <p>Second Child</p>
    {/snippet}
</Header> -->
<!-- <Header fake_name="Oruç"/> -->
<hr>

<!-- <input type="text" bind:value={soyisim} /> -->

<p>The store is now {status}</p>
<!-- <button onclick={toggle}>Tıkla</button> -->
<button {onclick}>Tıkla</button><br><br>

FormState
<hr>
<FormState/>
<!-- <hr> 
Snippet<br>
{@render formStep({question: "What is your NAME",id:"name",type:"text"})}
{#snippet  formStep({question, id, type}:{
    type: string;
    id: string;
    question: string;
})}
<article>
    <div>
        <label for={id}>{question}</label>
        <input type={type} id={id} bind:value={formStep[id]}/>
    </div>
</article>
{/snippet} -->
<!-- <h1>{formStep.name}</h1> -->
<hr>
<h2>DENEMELER</h2>
<!-- YANLIŞLAR -->
<!-- <button onclick={()=>durum++;}>{durum}</button> -->
<!-- <button on:click={()=>durum++}>{durum}</button> -->

<button onclick={() => durum+=1}>{durum}</button>

<style>
    :global(div){
        background-color: lightblue;
    }
    :global(.error){
        color:red;
    }
</style>