let pokemonRepository = (function () {
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

  function pokemonListLoop(pokemon) {
    console.log(getAll());
  }
  pokemonList.forEach(pokemonListLoop);
