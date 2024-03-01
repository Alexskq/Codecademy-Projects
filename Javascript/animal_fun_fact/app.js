import { animals } from "./animals";
import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const title = "";
const background = (
  <img src="/images/ocean.jpg" class="background" alt="ocean" />
);
const images = [];

for (const animal in animals) {
  images.push(
    <img
      onClick={displayFact}
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const index = Math.floor(
    Math.random() * animals[selectedAnimal].facts.length
  );
  const funFact = animals[selectedAnimal].facts[index];
  document.getElementById("fact").innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>{title !== "" ? title : "Click an animal for a fun fact"}</h1>
    {background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

root.render(animalFacts);
