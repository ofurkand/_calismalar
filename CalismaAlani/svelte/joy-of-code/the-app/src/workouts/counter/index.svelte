<script lang="ts">
    let count = $state(0);
</script>

<div>
    <input type="text" bind:value={count}>
    <button onclick={()=>count++}>Count</button>
</div>