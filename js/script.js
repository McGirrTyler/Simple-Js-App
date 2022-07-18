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
    showModal(pokemon);
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
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener("click", function (event) {
      // Click Listen - showDetails call
      showDetails(pokemon);
      showModal(pokemon); 
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
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
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
    imageElementFront.attr("src", pokemon.imageUrlFront);
    // Creating modal back image of pokemon
    let imageElementBack = $('<img class="modal-img"style="width:50%">');
    imageElementBack.attr("src", pokemon.imageUrlBack);
    //Creating Pokemon Height
    let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
    //Creating Pokemon Weight
    let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");
    //Creating Pokemon Type
    let typesElement = $("<p>" + "types : " + pokemon.types + "</p>");
    //Creating Pokemon Elements
    let abilitiesElement = $(
      "<p>" + "abilities : " + pokemon.abilities + "</p>"
    );

    //Calling Modal
    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
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

$('[data-toggle="modal"]').on('click', function(){
  let targetSelector = $(this).attr('data-target');
  $(targetSelector).modal('show'); // Bootstrap’s own function to make the modal appear
});