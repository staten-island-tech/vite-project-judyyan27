import "../CSS/style.css";
import { flowers } from "./flowers.js";

const DOMSelectors = {
  form: document.querySelector(`form`),
  button: document.querySelector(`.submit`),
  container: document.querySelector(`.container-box`),
};

function createCards(flowers) {
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

createCards(flowers);

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
