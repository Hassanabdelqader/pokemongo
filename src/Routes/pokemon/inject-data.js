/* eslint-disable */

const fs = require("fs");
const xlsx = require("xlsx");
const { PokemonDB } = require("../../models");

async function extractDataFromExcel() {
  pokemonData = [];
  const fileContent = fs.readFileSync("./PokemonGo.xlsx");
  const workbook = xlsx.read(fileContent, { type: "buffer" });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  const excelData = xlsx.utils.sheet_to_json(worksheet);

  for (const row of excelData) {
    this.pokemonData.push({
      pokemonName: row["Name"],
      pokemonimg: row["Img name"].toString(),
      pokemonGeneration: row["Generation"],
      evolutionStage: row["Evolution Stage"]
        ? row["Evolution Stage"].toString()
        : "",
      evolved: row["Evolved"],
      familyId: row["FamilyID"],
      crossGen: row["Cross Gen"],
      type1: row["Type 1"],
      type2: row["Type 2"],
      weather1: row["Weather 1"],
      weather2: row["Weather 2"],
      statTotal: row["STAT TOTAL"],
      atk: row["ATK"],
      def: row["DEF"],
      sta: row["STA"],
      legendary: row["Legendary"],
      aquireable: row["Aquireable"],
      spawns: row["Spawns"],
      regional: row["Regional"],
      raidable: row["Raidable"],
      hatchable: row["Hatchable"],
      shiny: row["Shiny"],
      nest: row["Nest"],
      new: row["New"],
      notGettable: row["Not-Gettable"],
      futureEvolve: row["Future Evolve"],
      cpAt40: row["100% CP @ 40"],
      cpAt39: row["100% CP @ 39"],
    });
  }

  try {
    const createdPokemons = await PokemonDB.bulkCreate(pokemonData);

    if (createdPokemons.length !== pokemonData.length) {
      throw new Error('Some Pokemon records were not created.');
    }
    return createdPokemons;
  } catch (error) {
    throw error;
  }
}

module.exports = extractDataFromExcel;
