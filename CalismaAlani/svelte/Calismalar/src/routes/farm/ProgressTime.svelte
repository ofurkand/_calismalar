<script lang="ts">
    import { farm } from "./farm.svelte";
</script>

<button onclick={()=>farm.progressTime()}>
    {farm.timeOfDay === "morning" ? "Gece" : "Gündüz"} Yap
</button>