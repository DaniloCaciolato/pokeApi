const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById(`loadMoreButton`)
const limit = 6
let offset = 0;

function loadPokemonItens(limit, offset) {
    function convertPokemonToLi(pokemon) {
        return `
        <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
    
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
    
                        <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                    </div>
                </li>
        
        `
    }

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join(``)
        pokemonList.innerHTML += newHTML
    })

}

loadPokemonItens(limit, offset)

loadMoreButton.addEventListener(`click`, () => {
    offset += limit
    loadPokemonItens(limit, offset)
})