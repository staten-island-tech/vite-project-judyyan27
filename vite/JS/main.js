import "../CSS/style.css";
import { flowers } from "./flowers.js";

const DOMSelectors = {
  form: document.querySelector(`form`),
  button: document.querySelector(`.submit`),
  container: document.querySelector(`#container-box`),
};

function createCards() {
    flowers.forEach(
    (flowers) => title = flowers.title, description = flowers.description, price = flowers.price, imageUrl = flowers.imageUrl, altText = flowers.altText
      
      
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend"
    )`<div class="card">
      <h3 class="card-title">${title}</h1>
      <h4 class="card-desc">${description}</p>
      <h5 class="card-price">${price}</h2>
      <img
        class="card-img"
        src="${imageUrl}"
        alt="${altText}"
      />
    </div>`
  );
}

createCards();

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
