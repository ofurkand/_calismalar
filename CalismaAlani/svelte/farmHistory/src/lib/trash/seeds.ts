export function accessToSeedsMarket() {
  let allSeeds: seed[] = $state([
    { id: "1", name: 'Gül', growthRate:1,initialAge:0},
    { id: "2", name: 'Lale', growthRate:1,initialAge:0}
  ]);

  // type seed = {
  //   id:number,
  //   name:string,
  //   color?:string,
  //   growthRate:number, // 1
  //   initialAge:number, // 0
  // }

  function add(seed:seed){
    allSeeds.push(seed);
    return true
  }

  function update(seed:seed){
    allSeeds = allSeeds.map(k => k.id === seed.id ? seed : k);

    // allSeeds = allSeeds.filter(k => k.id !== seed.id);
    // allSeeds.push(seed)

    // allSeeds.splice(seed.id);
    return true
  }

  function remove(seedID:string){
    // allSeeds.splice(seedID);
    allSeeds = allSeeds.filter(k => k.id !== seedID);  
    return true
  }

  return {
    allSeeds,
    add,
    update,
    remove
  }
}
  export const seeds = accessToSeedsMarket();