let pokemonRepository = (function () { //Start of IIFE
  let pokemonList = [{ //Array for Pokemon List
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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

  pokemonRepository.getAll().forEach(function(pokemon) { //Function call for pokemonList
    if (pokemon.height < 0.4) { // Command for smaller pokemons
      console.log(
        pokemon.name,
        pokemon.height + " Look! A tiny pokemon! ",
        pokemon.type
      );
      document.write(
        "<p>" + pokemon.name + "<br>",
        pokemon.height + " Look! A tiny pokemon! " + "<br>",
        pokemon.type + "<br>",
        "</p>"
      );

    } else if (pokemon.height > 1) { // Command for lager pokemons
        console.log(
          pokemon.name,
          pokemon.height + " Woah! A huge pokemon! ",
          pokemon.type
        );
        document.write(
          "<p>" +
          pokemon.name + "<br>",
          pokemon.height + " Woah! A huge pokemon! " + "<br>",
          pokemon.type + "<br>",
          "</p>"
        );

      } else { // Command for majority of pokemons
        console.log(pokemon.name, pokemon.height, pokemon.type);
        document.write(
          "<p>" +
          pokemon.name + "<br>",
          pokemon.height + "<br>",
          pokemon.type + "<br>",
          "</p>"
        );
      }
  });
