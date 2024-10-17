async function mostrarPokemon() {
    try {
        const response = await fetch('/pokemon-aleatorio');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const pokemon = await response.json();
        document.getElementById('pokemon-info').innerHTML = 
            `ID: ${pokemon.id}, Nombre: ${pokemon.nombre}`;
        document.getElementById('pokemon-imagen').src = pokemon.imagen;
    } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
        document.getElementById('pokemon-info').innerHTML = 'Error al cargar Pokémon.';
    }
}

// Ejecutar la función cuando se haga clic en el botón
document.getElementById('nuevo-pokemon').addEventListener('click', mostrarPokemon);

// Mostrar un Pokémon al cargar la página
window.onload = mostrarPokemon;