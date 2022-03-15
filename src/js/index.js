const listMenu = document.querySelectorAll('.menu-pokemon');

listMenu.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cardPokemonOpen = document.querySelector('.open');
        const menuPokemonOpen = document.querySelector('.on');
        cardPokemonOpen.classList.remove('open');
        menuPokemonOpen.classList.remove('on');


        const idPokemon = pokemon.attributes.id.value;
        const toOpen = document.getElementById('card-' + idPokemon);
        toOpen.classList.add('open');
        pokemon.classList.add('on');
    })
})