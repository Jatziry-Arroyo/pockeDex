const pockeDex = [pokemon1, pokemon2, pokemon3];

localStorage.setItem("pokemon", JSON.stringify(pokemon3));

localStorage.setItem("pokemon", JSON.stringify(pokemon2));

const dataPokemon = JSON.parse(localStorage.getItem("pockeDex"));
console.log(dataPokemon[1].name);

sessionStorage.setItem("sessionpokeDex", JSON.stringify(dataPokemon));
console.log(sessionStorage.key(0))
console.log(sessionStorage.removeItem("sessionpokeDex"));