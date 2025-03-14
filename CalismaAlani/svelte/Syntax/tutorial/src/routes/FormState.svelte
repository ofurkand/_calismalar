<script lang="ts">
	import Header from "./Header.svelte";

    let formState = $state({
        name: '',
        birthday: '',
        step: 0,
        error:''
    });
</script>

<main>
    <p>
        Step: {formState.step +1}
    </p>

    {@render formStep({question:"whts yr nm", id:"name",type:"text"})}

    {#if formState.error}
        <p class="error">{formState.error}</p>
    {/if}
    {#if formState.step === 0}
    <div>
        <label for="name">Your Name</label>
        <input type="text" id="name" bind:value={formState.name}/>
    </div>
    <button onclick={()=>{
        if (formState.name !=="") {
            formState.step+=1;
            formState.error="";
        }else{
            formState.error = "Your name is empty. Write your name."
        }
    }}>Kaydet</button>
    {:else if formState.step === 1}
        <!-- {#if formState.error}
            <p class="error">{formState.error}</p>
        {/if} -->
        <!-- {#if formState.step === 1} -->
        <div>
            <label for="bday">Your Birthday</label>
            <input type="date" id="bday" bind:value={formState.birthday}/>
        </div>
        <button onclick={()=>{
            if (formState.birthday !=="") {
                formState.step+=1;
                formState.error="";
            }else{
                formState.error = "Your birthday is empty. Write your name.";
            }
        }}>Kaydet</button>
        <!-- {/if} -->
    {/if}
</main>

{#snippet  formStep({question, id, type}:{
    type: string;
    id: string;
    question: string;
})}
<article>
    <div>
        <label for={id}>{question}</label>
        <input type={type} id={id} bind:value={formState[id]}/>
    </div>
</article>
{/snippet}
