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
    const actual = park.dinosaurs[0].species
    assert.strictEqual(actual, 'T Rex')
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
    const actual = park.allDinosaursSpecies('T Rex').length
    assert.strictEqual(actual, 2)
  });

  it('should be able to remove all dinosaurs of a particular species');

});
