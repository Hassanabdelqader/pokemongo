/* eslint-disable */

const { PokemonDB } = require('../models');

// Get All Pokemon

exports.getAllPokemons = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, filters } = req.query;

    const parsedPage = !isNaN(Number(page)) ? Number(page) : 1;
    const parsedPageSize = !isNaN(Number(pageSize)) ? Number(pageSize) : 10;

    const skip = (parsedPage - 1) * parsedPageSize;
    const take = parsedPageSize;

    let filterCriteria = {};

    if (filters) {
      try {
        const parsedFilters = JSON.parse(filters);
        for (const key in parsedFilters) {
          if (Object.prototype.hasOwnProperty.call(parsedFilters, key)) {
            filterCriteria[key] = parsedFilters[key];
          }
        }
      } catch (error) {
        filterCriteria = {};
      }
    }

    const pokemons = await PokemonDB.findAll({
      where: filterCriteria,
      offset: skip,
      limit: take,
    });

    res.status(200).json({
      message: 'Get All pokemons',
      data: pokemons,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Pokemon data', error: error.message });
  }
};


// Get One Pokemon by ID
exports.getOnePokemon = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const pokemon = await PokemonDB.findByPk(id);

    if (pokemon) {
      res.status(200).json({
        message: 'Get one pokemons',
        data: pokemon,
      });
    } else {
      res.status(404).json({ message: 'Pokemon not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Pokemon data', error: error.message });
  }
};

// Create a new Pokemon
exports.createPokemon = async (req, res) => {
  try {
    const data = req.body;
    if(!data){
      throw new Error("Please provide Body")
    }
    const newPokemon = await PokemonDB.create({ ...data });
    res.status(201).json({
      message: 'Create a new Pokemon',
      data: newPokemon,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating a new Pokemon', error: error.message });
  }
};

// Update a Pokemon by ID
exports.updatePokemon = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if(!req.body){
      throw new Error("Please provide Body")
    }

    const [updatedCount] = await PokemonDB.update({ ...req.body }, { where: { id } });

    if (updatedCount === 1) {
      const updatedPokemon = await PokemonDB.findByPk(id);
      res.status(200).json({
        message: 'Update a Pokemon',
        data: updatedPokemon,
      });
    } else {
      res.status(404).json({ message: 'Pokemon not found' });
    }
  } catch (error) {
    console.log("not foumnd");
    res.status(500).json({ message: 'Error updating Pokemon', error: error.message });
  }
};

// Delete a Pokemon by ID
exports.deletePokemon = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedCount = await PokemonDB.destroy({ where: { id } });

    if (deletedCount === 1) {
      res.status(200).json({ message: 'Pokemon Deleted' });
    } else {
      res.status(404).json({ message: 'Pokemon not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Pokemon', error: error.message });
  }
};

// You can add more controller functions for other operations here
