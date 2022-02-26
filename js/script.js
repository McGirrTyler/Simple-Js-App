let pokemonList = [{ //Array for Pokemon List
  name: "Bulbasaur",
  height: 0.7,
  type: ['Grass' , 'Poison']
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

for (let i = 0; i < pokemonList.length; i++) { //Command will write list no matter how many items are added.
  if (pokemonList[i].height < 0.4) { // Code to be used with smaller pokemons
    console.log(pokemonList[i].name, pokemonList[i].height + ' Look! A tiny pokemon. ', pokemonList[i].type);
    document.write(pokemonList[i].name + "<br>", pokemonList[i].height + ' Look! A tiny pokemon.' +
    "<br>", pokemonList[i].type + "<br>",);

  } else if (pokemonList[i].height > 1) { //Code will be used with larger pokemons
      console.log(pokemonList[i].name, pokemonList[i].height + ' WOAH! A huge pokemon! ',  pokemonList[i].type);
      document.write(pokemonList[i].name + "<br>",);

    } else { //Code that will be used for a majority of pokemons
      console.log(pokemonList[i].name, pokemonList[i].height,  pokemonList[i].type);
      document.write(pokemonList[i].name + "<br>", pokemonList[i].height + "<br>", pokemonList[i].type + "<br>",);
    }
}
