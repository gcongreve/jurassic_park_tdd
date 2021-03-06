const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Jurassic Park');
    dinosaur = new Dinosaur('T Rex', 'carnivore', 100);
    dinosaur3 = new Dinosaur('T Rex', 'carnivore', 100);
    dinosaur2 = new Dinosaur('Stegathingy', 'herbivore', 101);

  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const actual_species = park.dinosaurs[0].species;
    assert.strictEqual(actual_species, 'T Rex');
    const actual_length = park.dinosaurs.length;
    assert.strictEqual(actual_length, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.allDinosaursSpecies('T Rex').length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaurSpecies('T Rex');
    const actual_length = park.dinosaurs.length;
    assert.strictEqual(actual_length, 1)
    const actual_species = park.dinosaurs[0].species;
    assert.strictEqual(actual_species, 'Stegathingy')
  });

  it('should be able to provide number of dinosaurs by diet type', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.showDinoDiets();
    const expected = {
      carnivore: 2,
      omnivore:  0,
      herbivore: 1
    };
    assert.deepStrictEqual(actual, expected )
  } );

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.visitorsPerDay()
    assert.strictEqual(actual, 201)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.visitorsPerYear()
    assert.strictEqual(actual, 73365)
  });

  it('should be able to calculate the total ticket cash per year', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.ticketCashPerYear()
    assert.strictEqual(actual, 3668250)
  });


});
