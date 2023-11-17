console.log("Welcome on Mixed Generator");

const collection = {
  signInfo: ["star", "moon", "sun", "comet"],
  fortuneOutput: [
    "terrible luck",
    "bad luck",
    "ok luck",
    "good luck",
    "great luck",
  ],
  advice: ["go out and eat", "not read this", "play more", "trust no one"],
};

// crée une boucle pour itérer sur Collection et qui récupérer au hasard un élement de chaque clés
function randomGenerator(collection) {
  let result = {};
  for (let key in collection) {
    if (key === "signInfo") {
      result[key] =
        collection[key][Math.floor(Math.random() * collection[key].length)];
    } else if (key === "fortuneOutput") {
      result[key] =
        collection[key][Math.floor(Math.random() * collection[key].length)];
    } else if (key === "advice") {
      result[key] =
        collection[key][Math.floor(Math.random() * collection[key].length)];
    }
  }
  return result;
}

const sentence = randomGenerator(collection);

const real = `your sign is ${sentence.signInfo} and today you have ${sentence.fortuneOutput} and ${sentence.advice}`;

console.log(sentence);
console.log(real);
