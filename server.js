const express = require('express');
const path = require('path');  // Para manejar rutas de archivos
const obtenerPokemonAleatorio = require('./pokemon');  // Importar el componente

const app = express();
const port = 3000;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta que devuelve un Pokémon al azar en formato JSON
app.get('/pokemon-aleatorio', async (req, res) => {
  const pokemon = await obtenerPokemonAleatorio();
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(500).send('Error al obtener el Pokémon.');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
