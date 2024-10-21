const URL = "https://670fe58da85f4164ef2c6131.mockapi.io/products";

const productsTableBody = document
  .getElementById("products-table")
  .querySelector("tbody");

document.addEventListener("DOMContentLoaded", displayProducts);

// function displayProducts() {
//   fetch(URL)
//     .then((response) => response.json())
//     .then(
//       (products) => (productsTableBody.innerHTML = products.map((product = "
//         test
//         ")))
//     );
// }
