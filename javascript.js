/* 

Entorno Pruebas
Token para API: Ny8WOEdrmCwBJ3-U-oOYtg

Url API http://api.argentina.cdo.dev.yellowspot.com.ar/v1/products?auth_token=Ny8WOEdrmCwBJ3-U-oOYtg

Documentación (y pureba en con este token): http://cdo-api-docs.herokuapp.com/cdo


http://www.promoproductos/api/product


http://api.argentina.cdo.dev.yellowspot.com.ar/v1/products?auth_token=Ny8WOEdrmCwBJ3-U-oOYtg
 */


var APIGenericProduct;

(async function () {
  const requestUrl = "https://api.zecatdifapro.com/generic_product";
  let response = await fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => APIGenericProduct = data.generic_products);
  APIGenericProduct.forEach((prod) => console.log(prod))
})();


/* index */

