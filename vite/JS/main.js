import "../CSS/style.css";
import { flowers } from "./products.js";

const DOMSelectors = {
  button: document.querySelector(`.button`),
  container: document.querySelector(`.container-box`),
  theme: document.querySelector(`#theme`),
  spring_s: document.querySelector(`#spring_summer`),
  fall_w: document.querySelector(`#fall_winter`),
  vibrant: document.querySelector(`#vibrant`),
  pastel: document.querySelector(`#pastel`),
  sale: document.querySelector(`#sale`),
  reset: document.querySelector(`#reset`),
};

theme.addEventListener("click", function () {
  if (document.body.classList.contains("warm")) {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  } else if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  }
});

//standard function that creates cards for flowers on screen and can accept different arrays
function createCards(flowers) {
  DOMSelectors.container.innerHTML = "";
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

// Upon loading website, all cards show on screen
createCards(flowers);

//Reset selection of cards on screen
DOMSelectors.reset.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";
  createCards(flowers);
});

// When the spring_summer button is pressed, generate flowers that bloom in those seasons
DOMSelectors.spring_s.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";
  const springSummer = flowers.filter((flower) =>
    flower.typeof.includes("spring_summer")
  );
  createCards(springSummer);

  document.body.classList.add("warm");
  document.body.classList.remove("cool");
});

// When the fall_winter button is pressed, generate flowers that bloom in those seasons
DOMSelectors.fall_w.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";
  const fallWinter = flowers.filter((flower) =>
    flower.typeof.includes("fall_winter")
  );
  createCards(fallWinter);

  document.body.classList.add("cool");
  document.body.classList.remove("warm");
});

// When the vibrant button is pressed, generate flowers that are vibrant
DOMSelectors.vibrant.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";
  const vibrant = flowers.filter((flower) =>
    flower.typeof.includes("warm_vibrant")
  );
  createCards(vibrant);
});

// When the pastel button is pressed, generate flowers that are pastel
DOMSelectors.pastel.addEventListener("click", function () {
  DOMSelectors.container.innerHTML = "";
  const pastel = flowers.filter((flower) =>
    flower.typeof.includes("soft_pastel")
  );
  createCards(pastel);
});

/* .Map array method */
DOMSelectors.sale.addEventListener("click", function () {
  const onSale = flowers.filter((flower) => flower.typeof.includes("sale"));
  const sale = 0.6;
  const saleFlowers = onSale.map((flower) => ({
    ...flower,
    price: (flower.price * sale).toFixed(2),
    //fixed --> sets the decimal places to two places
  }));

  createCards(saleFlowers);
  // Create cards with discounted flower price
});

/* function sortby(){
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
