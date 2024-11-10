import "../CSS/style.css";
import { flowers } from "./flowers.js";

const DOMSelectors = {
  button: document.querySelector(`.button`),
  theme: document.querySelector(`#theme`),
  spring_s: document.querySelector(`#spring_summer`),
  fall_w: document.querySelector(`#fall_winter`),
  vibrant: document.querySelector(`#vibrant`),
  pastel: document.querySelector(`#pastel`),
  sale: document.querySelector(`#sale`),
  reset: document.querySelector(`#reset`),
  container: document.querySelector(`.container-box`),
};

// Upon loading website, all cards show on screen
function createCards(flowers) {
  flowers.forEach((flower) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-title">${flower.title}</h2>
        <h3 class="card-desc">${flower.description}</h3>
        <h4 class="card-price">$${flower.price}</h4>
        <img
          class="card-img"
          src="${flower.imageUrl}"
          alt="${flower.altText}"
        />
      </div>`
    )
  );
}
createCards(flowers);

//Reset selection of cards on screen
DOMSelectors.reset.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";
  createCards(flowers);
});

// When the spring_summer button is pressed, generate flowers that bloom in those seasons
DOMSelectors.spring_s.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";

  const springSummer = flowers.filter((flower) => flower.spring_summer === "Y");

  springSummer.forEach((flower) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-title">${flower.title}</h2>
        <h3 class="card-desc">${flower.description}</h3>
        <h4 class="card-price">$${flower.price}</h4>
        <img
          class="card-img"
          src="${flower.imageUrl}"
          alt="${flower.altText}"
        />
      </div>`
    )
  );
});

// When the fall_winter button is pressed, generate flowers that bloom in those seasons
DOMSelectors.fall_w.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";

  const fallWinter = flowers.filter((flower) => flower.fall_winter === "Y");

  fallWinter.forEach((flower) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-title">${flower.title}</h2>
        <h3 class="card-desc">${flower.description}</h3>
        <h4 class="card-price">$${flower.price}</h4>
        <img
          class="card-img"
          src="${flower.imageUrl}"
          alt="${flower.altText}"
        />
      </div>`
    )
  );
});

// When the vibrant button is pressed, generate flowers that are vibrant
DOMSelectors.vibrant.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";

  const vibrant = flowers.filter((flower) => flower.warm_vibrant === "Y");

  vibrant.forEach((flower) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-title">${flower.title}</h2>
        <h3 class="card-desc">${flower.description}</h3>
        <h4 class="card-price">$${flower.price}</h4>
        <img
          class="card-img"
          src="${flower.imageUrl}"
          alt="${flower.altText}"
        />
      </div>`
    )
  );
});

// When the pastel button is pressed, generate flowers that are pastel
DOMSelectors.pastel.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";

  const pastel = flowers.filter((flower) => flower.soft_pastel === "Y");

  pastel.forEach((flower) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-title">${flower.title}</h2>
        <h3 class="card-desc">${flower.description}</h3>
        <h4 class="card-price">$${flower.price}</h4>
        <img
          class="card-img"
          src="${flower.imageUrl}"
          alt="${flower.altText}"
        />
      </div>`
    )
  );
});

//movies.filter((movie) => movie.actors.includes("Actor name"));

/* 
function sortby(){
  //see what button was clicked
  //feed that text into sorting function

  createdSorted(x){
    movies.filter((movie) => if movie.genre == "x").forEach(())
  }
  //example of sorting 
}

function createdSorted {
  document.querySelector(".container").innerHTML = "";
  //erases the cards inside container
  createCards(flowers);
  //load new cards
} */
