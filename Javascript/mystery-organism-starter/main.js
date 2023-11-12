// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// Factory function

const pAequorFactory = (numb, arrDNA) => {
  // return an {specimenNum: , dna: }
  return {
    specimenNum: numb,
    dna: arrDNA,
    mutate() {
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase(); // A
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase(); // retourne une base différente
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherPAequor) {
      // 1 - comparer 2 adn et calculer combien de base sont identique à un meme index
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          count += 1;
        }
      }
      // 2 - print un message avec le % d'adn commun en utilisant .specimenNum pour identifier chaque pAequor
      console.log(
        `Specimen ${this.specimenNum} has ${
          (count * 100) / this.dna.length
        }% base DNA`
      );
    },
    willLikelySurvive() {
      const cAndG = this.dna.filter(
        (letter) => letter === "C" || letter === "G"
      );
      return cAndG.length / this.dna.length > 0.6;
    },
  };
};
let sample = [];
let i = 0;
while (sample.length < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive()) {
    sample.push(temp);
    i += 1;
  }
}

console.log(sample);
