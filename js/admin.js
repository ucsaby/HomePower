const productsTableBody = document
  .getElementById("products-table")
  .querySelector("tbody");

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
            <tr>
              <td>
                <div class="admin-image-container"><img class="admin-image" src="../${
                  product.imageURL
                }"></div>
              </td>
              <td>
                <p class="admin-name">${product.name}</p>
              </td>
              <td>
                <div class="admin-category-container"><p class="admin-category">${
                  product.category
                }</p></div>
              </td>
              <td>
                <p class="admin-price">${product.price} lei</p>
              </td>
              <td>
                ${product.promo ? `<p class="admin-promo">Promo</p>` : ``}
              </td>
              <td>
                <p class="admin-details">${product.details}</p>
              </td>
              <td>
                <p class="admin-feature">${product.feature1}</p>
                <p class="admin-feature">${product.feature2}</p>
                <p class="admin-feature">${product.feature3}</p>
              </td>
              <td>
                <div  class="admin-show-on-hover"><button><i class="material-icons-outlined">edit</i>edit</button>
                <button><i class="material-icons-outlined">delete</i>delete</button></div>
              </td>
            </tr>
          `
          )
          .join(""))
    );
}
