<script lang="ts">
    export class Time {
      elapsed = $state(0);
      isRunning = $state(false);
      private intervalId: number | null = null;
  
      constructor() {
        $effect(() => {
          if (this.isRunning) {
            this.intervalId = setInterval(() => {
              this.elapsed += 1;
            }, 1000);
            return () => this.intervalId && clearInterval(this.intervalId);
          }
        });
      }
  
      toggle() {
        this.isRunning = !this.isRunning;
      }
    }
  
    // Instance oluştur (global state gibi kullanılacak)
    export const time = new Time();
  </script>
  
  <button onclick={() => time.toggle()}>
    {time.isRunning ? '⏸️ Durdur' : '▶️ Başlat'}
  </button>
  <p>Geçen Süre: {time.elapsed}s</p>