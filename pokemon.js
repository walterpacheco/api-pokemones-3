const axios = require('axios');
// Función para obtener un Pokémon aleatorio
async function obtenerPokemonAleatorio() {
  const numeroAleatorio = Math.floor(Math.random() * 151) + 1; // Números entre 1 y 151
  const url = `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`;

  try {
    const respuesta = await axios.get(url);
    const pokemon = {
      id: respuesta.data.id,
      nombre: respuesta.data.name,
      imagen: respuesta.data.sprites.front_default

    };
    return pokemon;
  } catch (error) {
    console.error('Error al obtener el Pokémon:', error);
  }
}

module.exports = obtenerPokemonAleatorio;
