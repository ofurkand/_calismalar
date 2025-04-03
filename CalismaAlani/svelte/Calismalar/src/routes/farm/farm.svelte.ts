// export const farm = $state<{timeOfDay:"morning"|"night",seeds:string[]}>({
//     timeOfDay: "morning",
//     seeds:[]
// })

class Farm {
    timeOfDay: "morning" | "night" = $state("morning");
    seeds: string[] = $state([]);

    progressTime(){
        if (this.timeOfDay === "morning") {
            this.timeOfDay = "night";
        }else if (this.timeOfDay === "night"){
            this.timeOfDay = "morning";
        }
    }

    plantSeed(){
        this.seeds.push(".");
    }
}

export let farm = new Farm();