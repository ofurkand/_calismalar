<script>
    import FeedbackItem from "./FeedbackItem.svelte";
    import {FeedbackStore} from '../stores.js'
    // export let fb = [];
</script>

Feedback List
{#each $FeedbackStore as f (f.id)}
    <!-- <h3>{f.text}</h3> -->
    <!-- <div in:scale out:fade="{{ duration: 500 }}">-->
    <div>
        <FeedbackItem item={f}/>
    </div>
{/each}