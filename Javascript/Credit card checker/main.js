// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
console.log("------ First step ------")

const validateCred = arr => {
    let numList = []
    numList.push(arr[arr.length - 1])
    let newArr = arr.slice(0, arr.length - 1)                  // prende de l'index 0 à l'avant-dernier
    let reverseArr = [...newArr].reverse()                    // crée une copie du tableau sans modifié l'originale et l'inverse avec .reverse()
  for (let i = 0 ; i < reverseArr.length; i++){
    if(i % 2 === 0){                                         // sélectionne les index paires
      let digit = reverseArr[i]*2; 
      //console.log(digit)
      if(digit > 9){
        digit = digit - 9
        numList.push(digit)
      }else{
        numList.push(digit) 
      }
    }else {
      numList.push(reverseArr[i])
    }
  }
  //console.log(numList)
  const sum = numList.reduce((accumulator, value ) => accumulator + value)
  //console.log(result)
  const checked = sum % 10 === 0

  console.log(checked)
  return checked
 
}
validateCred(invalid1)                                  // return true or false ( valid : invalid)
console.log("------ Second step ------")

const findInvalidCards = batch => {
  let invalidCard = [];
  for (let i = 0 ; i < batch.length ; i++){
    if(!validateCred(batch[i])){                        // si validateCard == false alors il le push dans le tableau
      invalidCard.push(batch[i])
      }
  }
  //console.log(invalidCard)
  console.log("---- tab -------")
  return invalidCard                                    // contient toutes les cards invalident

}

//console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
//console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers
console.log(findInvalidCards(batch)); // Test what the mystery numbers are
console.log("---------- Third Step ----------")

const idInvalidCardCompanies = (invalidBatch) => {
  const companies = [];
  for (let i = 0; i < invalidBatch.length; i++) {
    switch (invalidBatch[i][0]) {
      case 3:
        companies.push("Amex (American Express)");
        break;
      case 4:
        companies.push("Visa");
        break;
      case 5:
        companies.push("Mastercard");
        break;
      case 6:
        companies.push("Discover");
        break;
      default:
        companies.push("Company not found");
    }
  }
  const uniqueCompanies = [...new Set(companies)];   // Set est une structure de données en JavaScript qui ne permet pas de doublons.
                                                    //[...new Set(companies)] crée un nouvel ensemble (Set) en utilisant le contenu de companies 
                                                    //comme source. Ensuite, le spread operator ([...]) est utilisé pour convertir l'ensemble en tableau.
  return uniqueCompanies;
}

//console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
//console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards


// ---------------- étapes pour vérifier un numéro -------------- 
//         1 - entrer une suite de numéro
//         2 - vérifier si l'input est vide ou pas
//         2 - transformer la string en interger puis la transformer dans un tableau
//         3 - vérifier si ce tableau renvoi : valide ou non
//         4 - si le numéro est invalide, trouver l'entreprise qui a envoyé cette carte
//         5 - afficher le nombre d'entreprises qui ont envoyé des cartes invalides

const num = "49298165439232848"

const stringToArray = str => {
  const input = console.log('Entrez le numéro de carte') // remplacer console.log / prompt pour affichage

  if(input === null){
    alert("Vous n'avez rien saisi")
    return [];
  }

  let arrayInput = Array.from(str).map(Number);
  return arrayInput
}

console.log(stringToArray(num))


const checkSteps = arr => {
  //  * si la fonction validateCard renvoi true on renvoi numéro de carte valide 
  //  * si ça renvoi false, on passe dans la carte dans la fonction idInvalidCardCompany
  // * on affiche un message " numéro de carte (nom de l'entreprise) invalide"
  if(validateCred(arr)){
    return `Numéro de carte ${arr[0]}... valide`;
    } else{
      return "numéro de carte invalide"
    }

}

console.log(checkSteps(stringToArray(num)));

  