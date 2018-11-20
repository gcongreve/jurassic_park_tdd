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

  // Park.prototype.visitorsPerYear = function () {
  //   let visitors = (this.visitorsPerDay)
  //   return visitors
  // };

  Park.prototype.visitorsPerYear = function () {
    let visitors = 0;
    for (dino of this.dinosaurs){
      visitors += dino.guestsAttractedPerDay;
    }
    return (visitors * 365)
  };

  Park.prototype.ticketCashPerYear = function () {
    let visitors = 0;
    for (dino of this.dinosaurs){
      visitors += dino.guestsAttractedPerDay;
    }
    return (visitors * 365 * 50)
  };


module.exports = Park;
