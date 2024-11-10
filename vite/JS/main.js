import "../CSS/style.css";
import { flowers } from "./flowers.js";

const DOMSelectors = {
  button: document.querySelector(`.button`),
  theme: document.querySelector(`#theme`),
  spring_summer: document.querySelector(`#spring_summer`),
  fall_winter: document.querySelector(`#fall_winter`),
  vibrant: document.querySelector(`#vibrant`),
  pastel: document.querySelector(`#pastel`),
  sale: document.querySelector(`#sale`),
  reset: document.querySelector(`#reset`),
  container: document.querySelector(`.container-box`),
};

function createCards() {
  flowers.forEach((flower) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h4 class="card-title">${flower.title}</h4>
        <h5 class="card-desc">${flower.description}</h5>
        <h5 class="card-price">$${flower.price}</h5>
        <img
          class="card-img"
          src="${flower.imageUrl}"
          alt="${flower.altText}"
        />
      </div>`
    )
  );
}
createCards();

reset.addEventlistener("click", function () {
  DOMSelectors.container.innerHTML = "";
  //erases the cards inside container

  createCards();

  //load new cards
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
