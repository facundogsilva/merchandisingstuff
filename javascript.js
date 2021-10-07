/* 

Entorno Pruebas
Token para API: Ny8WOEdrmCwBJ3-U-oOYtg

Url API http://api.argentina.cdo.dev.yellowspot.com.ar/v1/products?auth_token=Ny8WOEdrmCwBJ3-U-oOYtg

Documentación (y pureba en con este token): http://cdo-api-docs.herokuapp.com/cdo


http://www.promoproductos/api/product


http://api.argentina.cdo.dev.yellowspot.com.ar/v1/products?auth_token=Ny8WOEdrmCwBJ3-U-oOYtg
 */


var APIGenericProduct;
var productContainer = document.getElementById("product-container"); 
function printProduct(product) {
  var productTitle = `<h4> ${product.name} </h4>`;
  var productImage = `<img src="${product.images[0].image_url}" class="product-images-general">`
  var productDiv = document.createElement("div");
  productDiv.classList.add("single-product");
  productDiv.innerHTML = productTitle + productImage;
  productContainer.appendChild(productDiv);
}


(async function () {
  const requestUrl = "https://api.zecatdifapro.com/generic_product";
  let response = await fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => APIGenericProduct = data.generic_products);
  APIGenericProduct.forEach((prod) => console.log(prod));
  APIGenericProduct.forEach((prod) => printProduct(prod));
})();


async function apiHandler(url, store) {
  const requestUrl = "http://api.argentina.cdo.dev.yellowspot.com.ar/v1/products?auth_token=Ny8WOEdrmCwBJ3-U-oOYtg";
  let response = await fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => store = data.generic_products);
  store.forEach((prod) => console.log(prod));
  store.forEach((prod) => printProduct(prod));
}



/*
$.getJSON('api_example.json', function(data) {

var salida = '';

for( var i = 0; i < products.lenght; i++) {
  salida += '<li>' products.name + '</li>';
}

document.getElementById('products')
  .innerHTML = salida;
}
*/

/* so DARK-SIDED */ 

/* index */

/* 

var APIGenericProduct;

(async function () {
  const requestUrl = "https://api.zecatdifapro.com/generic_product";
  let response = await fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => APIGenericProduct = data.generic_products);
  APIGenericProduct.forEach((prod) => console.log(prod))
})();

*/