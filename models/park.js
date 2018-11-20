const Park = function (name) {

  this.name = name;
  this.ticketPrice = 50;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};


Park.prototype.removeDinosaur = function (dinosaur) {
 for (let i = 0; i < this.dinosaurs.length; i++) {
   if (this.dinosaurs[i] === dinosaur){
     this.dinosaurs.splice(i, 1);
     break;
   }
 }
};

Park.prototype.mostPopularDinosaur = function () {
  let mostPopular = "";
  let visitors = 0;
  for (const dino of this.dinosaurs){
    if (dino.guestsAttractedPerDay > visitors){
      visitors = dino.guestsAttractedPerDay;
      mostPopular = dino;
    }
  }
  return mostPopular;
};


Park.prototype.allDinosaursSpecies = function (species) {
  let dinoSpecies = [];
  for (const dino of this.dinosaurs){
    if (dino.species === species){
      dinoSpecies.push(dino);
    }
  }
  return dinoSpecies;
};

Park.prototype.removeDinosaurSpecies = function (species) {
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === species){
      this.dinosaurs.splice(i, 1);
    }
  }
 };


module.exports = Park;
