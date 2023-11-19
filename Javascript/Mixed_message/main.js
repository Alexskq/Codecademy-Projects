console.log("Welcome on Mixed Message Generator");

const collection = {
  motivation: [
    "La motivation vous permet de commencer. L'habitude vous permet de continuer.",
    "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.",
    "Ne rêvez pas de votre vie, vivez vos rêves.",
    "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
    "Le succès n'est pas accidentel. C'est du travail acharné, de la persévérance, de l'apprentissage, de l'étude, du sacrifice et, surtout, de l'amour de ce que vous faites.",
    "Votre temps est limité, ne le gaspillez pas en menant une existence qui n'est pas la vôtre.",
    "La vie est ce qui arrive pendant que vous êtes occupé à faire d'autres projets.",
    "La seule limite à notre réalisation de demain sera nos doutes d'aujourd'hui.",
    "Ne comparez pas votre début avec le milieu de quelqu'un d'autre.",
    "Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant.",
  ],
  perseverance: [
    "La persévérance n'est pas une course longue et solitaire. C'est une série de courses courtes, une après l'autre.",
    "Lorsque vous avez une vision claire de votre objectif, il est plus facile de ne pas abandonner.",
    "La persévérance est le secret de toutes les victoires.",
    "S'accrocher à quelque chose avec ténacité, voilà la vraie force.",
    "Le succès n'est pas donné. Il est gagné, à l'aide de sueur, de détermination et de travail acharné.",
    "Si vous tombez sept fois, levez-vous huit.",
    "La persévérance, c'est la persistance dans l'effort malgré les difficultés.",
    "Le succès est souvent le résultat d'une persévérance discrète.",
    "La persévérance est le chemin du succès.",
    "Continuez à avancer, même si chaque pas est petit. La persévérance conduit au succès.",
  ],
  ambition: [
    "Ayez de grandes attentes et attendez-vous à atteindre quelque chose de grand.",
    "L'ambition est le chemin du succès. La persévérance est le véhicule dans lequel vous y arrivez.",
    "N'ayez pas peur d'être ambitieux à propos de vos objectifs. Chaque rêveur a commencé petit.",
    "L'ambition est le premier pas vers le succès. Le deuxième pas est l'action.",
    "Si vous ne rêvez pas assez grand, vous risquez de ne pas faire de grandes choses.",
    "Ne mesurez pas votre carrière à l'échelle des autres. Mesurez-la à l'échelle de vos propres ambitions.",
    "L'ambition est le levier qui soulève la charge.",
    "L'ambition est la passion pour le succès.",
    "Si vous ne travaillez pas dur pour vos rêves, quelqu'un d'autre vous embauchera pour travailler dur pour les siens.",
    "L'ambition est le moteur qui vous permet de démarrer et de persévérer.",
  ],
};

function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function randomGenerator(collection) {
  let result = [];

  // Choisissez une clé aléatoire dans l'objet collection
  const randomKeyIndex = generateRandomNumber(Object.keys(collection).length);
  const randomKey = Object.keys(collection)[randomKeyIndex];

  // Choisissez un index aléatoire pour la clé sélectionnée
  const randomIndex = generateRandomNumber(collection[randomKey].length);

  // Ajoutez le message correspondant à la clé sélectionnée dans le résultat
  result.push(collection[randomKey][randomIndex]);

  console.log(result);
  return result;
}

const sentence = randomGenerator(collection).join("\n");
console.log(sentence);

// ? fournit un message de chaque clés

// // crée une boucle pour itérer sur Collection et qui récupérer au hasard un élement de chaque clés
// function randomGenerator(collection) {
//   let result = [];
//   for (let key in collection) {
//     const randomIndex = generateRandomNumber(collection[key].length);
//     // choisir aléatoirement entre une des clés de collections

//     const chooseKey = generateRandomNumber()
//     switch (key) {
//       case "motivation":
//         result.push(collection[key][randomIndex]);
//         break;
//       case "perseverance":
//         result.push(collection[key][randomIndex]);
//         break;
//       case "ambition":
//         result.push(collection[key][randomIndex]);
//         break;

//       default:
//         console.log("not found");
//         break;
//     }
//   }
//   console.log(result);
//   return result;
// }

// const sentence = randomGenerator(collection).join("\n");
// // const formatted = randomGenerator(collection).join(" ");

// console.log(sentence);
