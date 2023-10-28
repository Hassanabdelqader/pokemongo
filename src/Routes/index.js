/* eslint-disable*/
const express = require('express');

const router = express.Router();

const pokemons = require("./pokemon/pokemon")

router.use('/pokemon',pokemons );

module.exports = router;
