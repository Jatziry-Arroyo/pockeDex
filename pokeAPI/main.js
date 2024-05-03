const pokemonContainer = document.querySelector('.pokemon-container');

function fetchPokemon(id){ //funcion para llamar los objetos de la api
   fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) //url de api, tipo de dato que sera id pero puede ser nombre
   .then((res => res.json())) // funcion flecha
   //.then(data => console.log(data)) //funcion flecha
   .then((data) => {
     createPokemon(data);
   }); //se quito el console.log y se añadio la funcion para crear las cards

}

//fetchPokemon(1); es prueba para ver si aparecen los datos en la consola

function fetchpokemons(number) { // numero de pokemones que se van a traer
    for( let i = 1; i < number; i++){ // bucle - traer los datos empezando con el 1 que es el primero de la lista en el DOM y que no empiece con cero
        fetchPokemon(i); // i - numero de iteracion en el que va
    }
}

//pokemons(16); prueba para ver si cargo los 16 datos

function createPokemon(pokemon) { // funcion para las cards en el DOM
    const pokemonCard = document.createElement('div'); //* 1 crea un div para cada tarjeta
    pokemonCard.classList.add('pokemon-block'); //agrega la clase pokemon al div creado

    const pokemonConta = document.createElement('div'); // *2 crear contenedor de la imagen
    pokemonConta.classList.add('img-container');

    const pokemonImage = document.createElement('img'); //*3 crear una imagen
    pokemonImage.src = pokemon.sprites.front_default; //agrega la imagen al div creado, url de los pokemon. luego va la parte de sprite(un objeto con varias propiedades). fronr_default es para que se vea de frente
    
    pokemonConta.appendChild(pokemonImage); //*4 agrega el contendor junto con la imagen para el fondo al div

    const pokemonNumber = document.createElement('p'); //*5 parrafo para el numero de pokemon
    pokemonNumber.textContent = `# ${pokemon.id.toString().padStart(3, 0)}`; // es para darle el numero de pokemon más detalladamente con el id que se pasa a un hilo, y padsStar añade 2 ceros al principio del numero

    const pokemonName = document.createElement('p'); //*6 crear un parrafo para el nombre
    pokemonName.classList.add('pokemonName')// 
    pokemonName.textContent = pokemon.name;
    //pokemonName.innerText = pokemon.name; //agrega el nombre del pokemon al parrafo creado

    const pokemonWeight = document.createElement('p') //* 7 peso del pokemon
    pokemonWeight.textContent = `Weight: ${pokemon.weight}`; 
    
    
    pokemonCard.appendChild(pokemonConta); //* paso 2
    pokemonCard.appendChild(pokemonNumber) //* 5
    pokemonCard.appendChild(pokemonName); //* 6
    pokemonCard.appendChild(pokemonWeight); //* 7

    pokemonContainer.appendChild(pokemonCard); // la primera constante 
}   

fetchpokemons(16); // llama a la funcion para traer los 16 pokemones