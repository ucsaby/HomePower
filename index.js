const URL = "https://670fe58da85f4164ef2c6131.mockapi.io/products";
const productsContainer = document.querySelector(".content-container");

document.addEventListener("DOMContentLoaded", displayProducts);

function displayProducts() {
  fetch(URL)
    .then((response) => response.json())
    .then((products) => {
      productsContainer.innerHTML = "";
      products.forEach((product) => {
        const promoShow = product.promo //Constanta care verifica daca promoul este true sau false
          ? `<div class="card-promo">Promo</div>`
          : "";
        productsContainer.innerHTML += `
          <div class="card-container">
            <div class="card-image">
              <!-- <div class="card-promo"></div> -->
              ${promoShow}
              <img src="${product.imageURL}" alt="${product.name}" />
            </div>
            <div class="card-product-category">${product.category}</div>
            <div class="card-title">${product.name}</div>
            <div class="card-details">
              <ul>
                <li>${product.feature1}</li>
                <li>${product.feature2}</li>
                <li>${product.feature3}</li>
              </ul>
            </div>
            <div class="card-price">${product.price} lei</div>
            <div class="card-button"><a href="#">Buy now</a></div>
          </div>
        `;
      });
    });
}
