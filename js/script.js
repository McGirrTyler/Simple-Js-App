let pokemonRepository = (function () { //Start of IIFE
  let repository = [{ //Array for Pokemon List
    name: "Bulbasaur",
    height: 0.7,
    type: ['Grass' , ' Poison']
  },

  {
    name: "Charmander",
    height: 0.6,
    type: ['Fire']
  },

  {
    name: "Squirtle",
    height: 0.5,
    type: ['Water']
  },

  {
    name: "Caterpie",
    height: 0.3,
    type: ['Bug']
}];

  function add(pokemon) { // Function that allows for adding of Pokemons
    repository.push(pokemon);
  }

  function getAll() { // Function that calls repository
    return repository;
  }

  function addListItem(pokemon) { // Function used to call and dispaly pokemons
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener("click", function showDetails(listPokemon) { // Click Listen - showDetails call
        console.log(pokemon.name);
      });

  }

  return { // Returns functions
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

    // Start of main forEach
    pokemonRepository.getAll().forEach(function(pokemon) { //Function call for pokemonList
      if (pokemon.height < 0.4) { // Command for smaller pokemons
        console.log(
          pokemon.name,
          pokemon.height + " Look! A tiny pokemon! ",
          pokemon.type
        );

      } else if (pokemon.height > 1) { // Command for lager pokemons
          console.log(
            pokemon.name,
            pokemon.height + " Woah! A huge pokemon! ",
            pokemon.type
          );

        } else { // Command for majority of pokemons
          console.log(pokemon.name, pokemon.height, pokemon.type);
        }
    });

    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });

    /* Potiental Code for Search Bar
    document.querySelector('.show-more').addEventListener('click', function () {
      document.querySelector('.additional-information')
      .classList.toggle('is-visible');
    });
    */
