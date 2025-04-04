<script lang="ts">
    // Doğru import (Time.svelte'den time instance'ını al)
    import { time } from './Time.svelte';
  
    name: string=$props(); // Prop olarak name al
  
    // State'ler
    let growth = $state(0);
    let isPlanted = $state(false);
  
    // Reactive statement
    $effect(() => {
      if (isPlanted && time.isRunning && time.elapsed % 10 === 0) {
        growth += 1;
      }
    });
  </script>
  
  <div class:planted={isPlanted}>
    <h2>{name}</h2>
    <p>Büyüme: {growth}</p>
    <button on:click={() => isPlanted = !isPlanted}>
      {isPlanted ? 'Sök' : 'Ek'}
    </button>
  </div>