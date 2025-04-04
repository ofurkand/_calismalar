<script lang="ts">
    // export var time:number = $state(0);

    class Time {
    elapsed = $state(0);
    autoContinue = $state(true);
    timePassed = $state(0);
    private intervalId: number | null = null; // ChatGPT

    constructor() {
      // Effect for autoContinue
        $effect(() => {
            if (this.autoContinue) {
                this.intervalId = setInterval(() => {
                this.elapsed += 1;
            }, 20);
            
            return () => {
                if (this.intervalId) clearInterval(this.intervalId);
            };
            } else if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        });

        // Effect for elapsed changes
        $effect(() => {
            if (this.elapsed === 100) {
                this.reset();
                this.changeHalfDay();
            }
        });

        // Effect for timePassed changes
        $effect(() => {
            console.log("Age updated:", this.timePassed);
        });
        }

        changeHalfDay() {
            this.timePassed += 0.5;
        }
        reset() {
            this.elapsed = 0;
        }
    }

    // Example usage
    const timer = new Time();
</script>

<progress value={timer.elapsed} max=100></progress>
<span>{timer.timePassed}</span>

<style>

</style>