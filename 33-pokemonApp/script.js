const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const imgContainer = document.getElementById("img-container");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const searchForm = document.getElementById("search-form");

/* Note: Pokémon names should be in lowercase, 
 have special characters removed, and be dash separated. 
 Also, if the Pokémon has either ♀ or ♂ as part of its name, 
the format is {name-f} or {name-m}, respectively. */

const formatInput = (input) => {
  let formattedInput = input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-\u2640\u2642]/g, "");
  if (formattedInput.includes("\u2640")) {
    formattedInput = formattedInput.replace(/\u2640/g, "-f");
  }
  if (formattedInput.includes("\u2642")) {
    formattedInput = formattedInput.replace(/\u2642/g, "-m");
  }
  return formattedInput;
};

const searchPokemon = async () => {
  try {
    const pokemonNameOrId = formatInput(searchInput.value);
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );
    const data = await response.json();
    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonID.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    types.innerHTML =
      "Type: " +
      data.types.map((obj) => `<span>${obj.type.name}</span>`).join(" + ");
    hp.textContent = `${data.stats[0].base_stat}`;
    attack.textContent = `${data.stats[1].base_stat}`;
    defense.textContent = `${data.stats[2].base_stat}`;
    specialAttack.textContent = `${data.stats[3].base_stat}`;
    specialDefense.textContent = `${data.stats[4].base_stat}`;
    speed.textContent = `${data.stats[5].base_stat}`;
    imgContainer.innerHTML = `
        <img id="sprite" class="pokemon-image" src="${data.sprites.front_default}" alt="${data.name} front image">`;
  } catch (error) {
    alert("Pokemon not found");
    console.log(`Pokemon not found: ${error}`);
  }
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchPokemon();
});
