<script lang="ts">
    // Base Seed Class
    class Seed {
    age = $state(0);
    health = $state(100);
    isPlanted = $state(false);

    // Ortak method
    grow() {
        this.age += 1;
        this.health = Math.min(100, this.health + 10);
    }
    }

    // Flower Class (Seed'den miras alır)
    class Flower extends Seed {
        color = $state('pink');
        petals = $state(0);
        isBlooming = $derived(this.age > 3 && this.health > 70);

        constructor(color: string) {
            super(); // Seed constructor'ını çağır
            this.color = color;
            
            // Büyüme efekti
            $effect(() => {
            if (this.isPlanted) {
                const timer = setInterval(() => this.grow(), 1000);
                return () => clearInterval(timer);
            }
            });
            $effect(() => {
            if (this.isBlooming) {
                this.bloom();
                console.log("tamam");
            }
            });
        }

        // Flower'a özel method
        bloom() {
            if (this.isBlooming) {
                this.petals = 5;
            }
        }
    }

    // Kullanım
    const rose = new Flower('red');
</script>

<!-- UI -->
<button onclick={() => rose.isPlanted = true}>
    {rose.isPlanted ? '🌱 Growing...' : 'Plant Seed'}
</button>

<div class:blooming={rose.isBlooming}>
    <p>Age: {rose.age}</p>
    <p>Health: {rose.health}%</p>
    <p>Color: {rose.color}</p>
    {#if rose.isBlooming}
    <p>🌸 {rose.petals} Petals!</p>
    {/if}
</div>

<style>
    .blooming {
    color: var(--flower-color);
    transition: all 0.5s;
    }
</style>