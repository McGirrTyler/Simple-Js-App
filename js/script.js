let pokemonRepository = (function () {
  //Start of IIFE
  let pokemonList = []; // Pokemon Array to be fetched
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=150";

  function add(pokemon) {
     // Function that allows for adding of Pokemons
     if (typeof pokemon === "object" && "name" in pokemon) {
        pokemonList.push(pokemon);
     } else {
        console.log("pokemon is not correct");
     }
  }

  function getAll() {
     // Call repository
     return pokemonList;
  }

  function showDetails(pokemon) {
     //Details of indiviual Pokemons
     loadDetails(pokemon).then(function () {
        console.log(pokemon);
        showModal(pokemon); // Modal call
     });
  }

  function addListItem(pokemon) {
     // Call and dispaly Pokemons
     let pokemonList = document.querySelector(".list-group-horizontal");
     let listPokemon = document.createElement("li");
     pokemonList.classList.add(".list-group-horizontal"); //flexbox grid-system
     pokemonList.classList.add("col-sm-7"); //flexbox grid-system
     let button = document.createElement("button");
     button.innerText = pokemon.name;
     button.classList.add("button-class");
     listPokemon.appendChild(button);
     pokemonList.appendChild(listPokemon);
     button.addEventListener("click", function (event) {
        // Click Listen - showDetails call
        showDetails(pokemon);
     });
  }

  function loadList(item) {
     // Loads API
     return fetch(apiUrl)
        .then(function (response) {
           return response.json();
        })
        .then(function (json) {
           json.results.forEach(function (item) {
              let pokemon = {
                 name: item.name,
                 detailsUrl: item.url,
              };
              add(pokemon);
           });
        })
        .catch(function (e) {
           console.error(e);
        });
  }

  function loadDetails(item) {
     let url = item.detailsUrl;
     return fetch(url)
        .then(function (response) {
           return response.json();
        })
        .then(function (details) {
           // Add the details to the item
           item.imageUrlfront = details.sprites.front_default;
           item.imageUrlback = details.sprites.back_default;
           item.height = details.height;
           item.weight = details.weight;
           item.types = details.types.map((type) => type.type.name).join(" , ");
           item.abilities = details.abilities.map((ability) => ability.ability.name).join(" , ");
        })
        .catch(function (e) {
           console.error(e);
        });
  }

  function showModal(pokemon) {
     //Defining Modal Elements
     let modalBody = $(".modal-body");
     let modalTitle = $(".modal-title");
     let modalHeader = $(".modal-header");
     // Clearing Modal
     modalTitle.empty();
     modalBody.empty();

     //Creating Pokemon name header
     let nameElement = $("<h1>" + pokemon.name + "</h1>");
     //Creating modal front img of pokemon
     let imageElementFront = $('<img class="modal-img"style="width:50%">');
     imageElementFront.attr("src", pokemon.imageUrlfront);
     // Creating modal back image of pokemon
     let imageElementBack = $('<img class="modal-img"style="width:50%">');
     imageElementBack.attr("src", pokemon.imageUrlback);
     //Creating Pokemon Height
     let heightElement = $("<p>" + "Height : " + pokemon.height + "</p>");
     //Creating Pokemon Weight
     let weightElement = $("<p>" + "Weight : " + pokemon.weight + "</p>");
     //Creating Pokemon Type
     let typesElement = $("<p>" + "Types : " + pokemon.types + "</p>");
     //Creating Pokemon Abilities
     let abilitiesElement = $("<p>" + "Abilities : " + pokemon.abilities + "</p>");

     //Calling Modal
     modalTitle.append(nameElement);
     modalBody.append(imageElementFront);
     modalBody.append(imageElementBack);
     modalBody.append(heightElement);
     modalBody.append(weightElement);
     modalBody.append(typesElement);
     modalBody.append(abilitiesElement);

     $("#exampleModal").modal("toggle");
  }

  return {
     add: add,
     getAll: getAll,
     loadList: loadList,
     addListItem: addListItem,
     loadDetails: loadDetails,
     showDetails: showDetails,
  };
})(); // End of IIFE
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
     pokemonRepository.addListItem(pokemon);
  });
});