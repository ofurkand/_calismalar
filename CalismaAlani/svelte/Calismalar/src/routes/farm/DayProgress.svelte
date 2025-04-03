<script lang="ts">
    // export var time:number = $state(0);

    class Time {
    elapsed = $state(0);
    autoContinue = $state(true);
    howOld = $state(0);
    private intervalId: number | null = null;

    constructor() {
      // Effect for autoContinue
        $effect(() => {
            if (this.autoContinue) {
                this.intervalId = setInterval(() => {
                this.elapsed += 1;
            }, 10);
            
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
                this.changeDay();
            }
        });

        // Effect for howOld changes
        $effect(() => {
            console.log("Age updated:", this.howOld);
        });
        }

        changeDay() {
            this.howOld += 1;
        }

        reset() {
            this.elapsed = 0;
        }
    }

    // Example usage
    const timer = new Time();
</script>

<progress value={timer.elapsed} max=100></progress>
<span>{timer.howOld}</span>

<style>

</style>