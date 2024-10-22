const productsTableBody = document.getElementById("list-container");

document.addEventListener("DOMContentLoaded", displayProducts);

const URL = "https://670fe58da85f4164ef2c6131.mockapi.io/products";

function displayProducts() {
  fetch(URL)
    .then((response) => response.json())
    .then(
      (products) =>
        (productsTableBody.innerHTML = products
          .map(
            (product) => `
              <div class="list-element">
                <div class="list-image">
                  <div class="list-image-container">
                    <img class="admin-image" src="../${product.imageURL}">
                  </div>
                </div>
                <div class="list-name"><p class="admin-name">${
                  product.name
                }</p></div>
                <div class="list-category-container"><p class="list-category text-center">${
                  product.category
                }</p></div>
                <div class="list-price"><p class="admin-price">${
                  product.price
                } lei</p></div>
                <div class="list-promo">${
                  product.promo
                    ? `<p class="admin-promo">Promo</p>`
                    : `<p class="admin-no-promo">No Promo</p>`
                }</div>
                
                <div class="list-details">
                  <div class="list-details">${product.details}</div>
                </div>
                <div class="list-features">
                  <p class="admin-feature">${product.feature1}</p>
                  <p class="admin-feature">${product.feature2}</p>
                  <p class="admin-feature">${product.feature3}</p>
                </div>
                <div class="list-button">
                  <div class="admin-buttons">
                    <button><i class="material-icons-outlined">edit</i>edit</button>
                    <button><i class="material-icons-outlined">delete</i>delete</button>
                  </div>
                </div>
              </div>
          `
          )
          .join(""))
    );
}
