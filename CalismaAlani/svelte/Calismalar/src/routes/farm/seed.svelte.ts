class Seed{
    static allSeedTypes = [];

    constructor(name,age){
        
    }
    name: string = "Bitki";
    age: number = $state(0);
    
    timePass(growth:number){
        this.age+=growth;
    }

    // $effect(()=>{

    // })
}

// class Flower extends Seed{
//     constructor
// }