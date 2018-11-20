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
  let mostPopular;
  let visitors = 0;
  for (const dino of this.dinosaurs){
    if (dino.guestsAttractedPerDay > visitors){
      mostPopular = dino;
      visitors = dino.guestsAttractedPerDay;
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

// Park.prototype.removeDinosaurSpecies = function (species) {
//   dinoArray = []
//   for (dino in this.dinosaurs) {
//     if (dino.species != species){
//       dinoArray.push(dino);
//     }
//   }
//   this.dinosaurs = dinoArray;
//  };

 Park.prototype.showDinoDiets = function () {
   const diet = {
     carnivore: 0,
     omnivore:  0,
     herbivore: 0
   }

   for (dino of this.dinosaurs){
     if (dino.diet === 'carnivore'){
       diet.carnivore += 1;}
     else if (dino.diet === 'omnivore'){
       diet.omnivore += 1;}
    else if (dino.diet === 'herbivore'){
      diet.herbivore += 1;}
    }
     return diet
  };

  Park.prototype.visitorsPerDay = function () {
    let visitors = 0;
    for (dino of this.dinosaurs){
      visitors += dino.guestsAttractedPerDay;
    }
    return visitors
  };


  Park.prototype.visitorsPerYear = function () {
    const visitors = (this.visitorsPerDay() * 365)
    return visitors
  };


  Park.prototype.ticketCashPerYear = function () {
    const cash =  (this.visitorsPerYear() * this.ticketPrice)
    return cash
  };


module.exports = Park;
