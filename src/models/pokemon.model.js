/* eslint-disable */

const PokemonModel = (sequelize, DataTypes) =>
  sequelize.define(
    "pokemons",
    {
      pokemonName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pokemonimg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pokemonGeneration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      evolutionStage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      evolved: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      familyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      crossGen: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      weather1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weather2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      statTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      atk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      def: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      legendary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      aquireable: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      spawns: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      regional: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      raidable: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hatchable: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shiny: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nest: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      new: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      notGettable: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      futureEvolve: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cpAt40: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cpAt39: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Use DataTypes.NOW for the current timestamp
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Use DataTypes.NOW for the current timestamp
      },
    },
    {
      // Options
    }
  );

module.exports = PokemonModel;
