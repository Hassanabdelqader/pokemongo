/* eslint-disable */
const express = require("express");
const router = express.Router();
const pokemonController = require('../../controllers/pokemonController');
const extractDataFromExcel = require("./inject-data");


router.get("/", pokemonController.getAllPokemons);
router.get("/:id", pokemonController.getOnePokemon);
router.post("/", pokemonController.createPokemon);
router.patch("/:id", pokemonController.updatePokemon);
router.delete("/:id", pokemonController.deletePokemon);

// this is for Injecting DATA
router.post("/inject", (req, res) => {
  try {
    // Call injection function here
    extractDataFromExcel();
    
    // Return a 201 Created status code with a success message
    res.status(201).json({
      message: 'Data injected to DB successfully',
    });
  } catch (error) {
    // If there is an error, return an appropriate status code and error message
    res.status(500).json({
      message: 'Error injecting data to DB',
      error: error.message,
    });
  }
});
module.exports = router;

