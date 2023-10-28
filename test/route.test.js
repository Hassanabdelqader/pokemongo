/* eslint-disable */

const request = require("supertest");
const { app } = require("../src/server"); // Assuming your Express app is in 'app.js' or similar

describe("Pokemon API Routes", () => {
  let PokemonID;

  beforeAll(async () => {
    const newPokemon = {
      pokemonName: "HasanMousaHasan",
      pokemonimg: "1",
      pokemonGeneration: 0,
      evolutionStage: "FirstStage",
      evolved: 0,
      familyId: 0,
      crossGen: 0,
      type1: "DefaultType1",
      type2: "DefaultType2",
      weather1: "DefaultWeather1",
      weather2: "DefaultWeather2",
      statTotal: 0,
      atk: 0,
      def: 0,
      sta: 0,
      legendary: 0,
      aquireable: 0,
      spawns: 0,
      regional: 0,
      raidable: 0,
      hatchable: 0,
      shiny: 0,
      nest: 0,
      new: 0,
      notGettable: 0,
      futureEvolve: 0,
      cpAt40: 0,
      cpAt39: 0,
    };
    try {
      const { _body } = await request(app)
        .post("/root/pokemon")
        .send(newPokemon);

      PokemonID = _body.data.id;
    } catch (error) {
      PokemonID = 0;
    }
  });

  afterAll(async () => {
    // Cleanup or close database connections after the tests
  });

  it("should create a pokemon", async () => {
    const newPokemon = {
      pokemonName: "DefaultName",
      pokemonimg: "1",
      pokemonGeneration: 0,
      evolutionStage: "FirstStage",
      evolved: 0,
      familyId: 0,
      crossGen: 0,
      type1: "DefaultType1",
      type2: "DefaultType2",
      weather1: "DefaultWeather1",
      weather2: "DefaultWeather2",
      statTotal: 0,
      atk: 0,
      def: 0,
      sta: 0,
      legendary: 0,
      aquireable: 0,
      spawns: 0,
      regional: 0,
      raidable: 0,
      hatchable: 0,
      shiny: 0,
      nest: 0,
      new: 0,
      notGettable: 0,
      futureEvolve: 0,
      cpAt40: 0,
      cpAt39: 0,
    };
    const response = await request(app).post("/root/pokemon").send(newPokemon);;
    expect(response.status).toBe(201);
    expect(response.clientError).toBe(false);
    // Add more assertions to validate the response data and database state
  });

  it("should get all pokemon", async () => {
    const response = await request(app).get("/root/pokemon");
    expect(response.status).toBe(200);
  });


  it("should Hassan Pokemon by filter", async () => {
    const response = await request(app).get("/root/pokemon?page=1&pageSize=5&filters={'pokemonName':'HasanMousaHasan' }");
    expect(response.status).toBe(200);
  });



  it("should get one pokemon", async () => {
    const response = await request(app).get(`/root/pokemon/${PokemonID}`);
    expect(response.status).toBe(200);
  });

  it("should get return 500 if ID isInvalid", async () => {
    const response = await request(app).get(`/root/pokemon/**+@`);
    expect(response.status).toBe(500);
  });

  it("should get return 404 if not found", async () => {
    const response = await request(app).get(`/root/pokemon/-1`);
    expect(response.status).toBe(404);
  });

  it("should update a pokemon", async () => {
    const updatedPokemon = {
      pokemonName: "Updated DefaultName",
      pokemonimg: "1",
      pokemonGeneration: 0,
      evolutionStage: "Updated FirstStage",
      evolved: 0,
      familyId: 0,
      crossGen: 0,
      type1: "DefaultType1",
      type2: "DefaultType2",
      weather1: "DefaultWeather1",
      weather2: "DefaultWeather2",
      statTotal: 0,
      atk: 0,
      def: 0,
      sta: 0,
      legendary: 0,
      aquireable: 0,
      spawns: 0,
      regional: 0,
      raidable: 0,
      hatchable: 0,
      shiny: 0,
      nest: 0,
      new: 0,
      notGettable: 0,
      futureEvolve: 0,
      cpAt40: 0,
      cpAt39: 0,
    };

    const response = await request(app)
      .patch(`/root/pokemon/${PokemonID}`)
      .send(updatedPokemon);
       expect(response.status).toBe(200);
    // Add more assertions to validate the response data and database state
  });

  it("should retunr 404 if not valid id", async () => {
    const updatedPokemon = {
      pokemonName: "Updated DefaultName",
      pokemonimg: "1",
      pokemonGeneration: 0,
      evolutionStage: "Updated FirstStage",
      evolved: 0,
      familyId: 0,
      crossGen: 0,
      type1: "DefaultType1",
      type2: "DefaultType2",
      weather1: "DefaultWeather1",
      weather2: "DefaultWeather2",
      statTotal: 0,
      atk: 0,
      def: 0,
      sta: 0,
      legendary: 0,
      aquireable: 0,
      spawns: 0,
      regional: 0,
      raidable: 0,
      hatchable: 0,
      shiny: 0,
      nest: 0,
      new: 0,
      notGettable: 0,
      futureEvolve: 0,
      cpAt40: 0,
      cpAt39: 0,
    };
    const response = await request(app)
      .patch(`/root/pokemon/-1`)
      .send(updatedPokemon);
       expect(response.status).toBe(404);
    // Add more assertions to validate the response data and database state
  });

  it("should retunr 500 if not valid id", async () => {
    const updatedPokemon = {
      pokemonName: "Updated DefaultName",
      pokemonimg: "1",
      pokemonGeneration: 0,
      evolutionStage: "Updated FirstStage",
      evolved: 0,
      familyId: 0,
      crossGen: 0,
      type1: "DefaultType1",
      type2: "DefaultType2",
      weather1: "DefaultWeather1",
      weather2: "DefaultWeather2",
      statTotal: 0,
      atk: 0,
      def: 0,
      sta: 0,
      legendary: 0,
      aquireable: 0,
      spawns: 0,
      regional: 0,
      raidable: 0,
      hatchable: 0,
      shiny: 0,
      nest: 0,
      new: 0,
      notGettable: 0,
      futureEvolve: 0,
      cpAt40: 0,
      cpAt39: 0,
    };
    const response = await request(app)
      .patch(`/root/pokemon/@#@$!@`)
      .send(updatedPokemon);
       expect(response.status).toBe(500);
    // Add more assertions to validate the response data and database state
  });

  it("should delete a pokemon", async () => {
    const response = await request(app).delete(`/root/pokemon/${PokemonID}`);
    expect(response.status).toBe(200);
  });

  it("should return 404 if not found", async () => {
    const response = await request(app).delete(`/root/pokemon/#$@1`);
    expect(response.status).toBe(404);
  });
  it("should return 404 if not found", async () => {
    const response = await request(app).delete(`/root/pokemon`);
    expect(response.status).toBe(404);
  });
});
