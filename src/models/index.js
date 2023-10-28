/* eslint-disable */
const { Sequelize , DataTypes} = require('sequelize');

const Pokemon = require('./pokemon.model')

var config

if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
} else {
  config = {
    logging: false
  }
}

const db = new Sequelize(
    process.env.DATABASE_URL ,
    {
      logging: false,
    } 
  )

  const PokemonDB = Pokemon(db, DataTypes);


module.exports ={
    db : db,
    PokemonDB  
}