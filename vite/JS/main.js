import "../CSS/style.css";
import { flowers } from "./flowers.js";

const DOMSelectors = {
  form: document.querySelector(`form`),
  button: document.querySelector(`.submit`),
  container: document.querySelector(`#container-box`),
};

flowers.forEach(
  (flowers) => (title = flowers.name),
  (description = flowers.description),
  (price = flowers.price),
  (image = flowers.image),
  (altText = flowers.altText.DOMSelectors.container.insertAdjacentHTML(
    "beforeend"
  )`    <div class="card">
      <h3 class="card-title">${title}</h1>
      <h4 class="card-desc">${description}</p>
      <h5 class="card-price">${price}</h2>
      <img
        class="card-img"
        src="${image}"
        alt="${altText}"
      />
    </div>`)
);
