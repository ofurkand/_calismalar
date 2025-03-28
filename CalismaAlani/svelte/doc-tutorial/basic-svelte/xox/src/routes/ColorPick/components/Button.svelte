<script>
    import { Colors } from "./shared.svelte.js";
</script>

{#each Colors.color as _, i}
    <button
        style="background: {Colors.color[i]}"
        aria-label={Colors.color[i]}
        aria-current={Colors.selected === Colors.color[i]}
        onclick={() => Colors.selected = Colors.color[i]}
    >{i + 1}</button>
    {console.log(i)}
{/each}


<style>
    button {
        aspect-ratio: 1;
        width: 50px;
        border-radius: 50%;
        background: var(--color, #fff);
        transform: translate(-2px,-2px);
        filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
        transition: all 0.3s;
        color: black;
        font-weight: 700;
        font-size: 2rem;
    }

    button[aria-current="true"] {
        transform: none;
        filter: none;
        box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
    }
</style>

