const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

//Forma para calcular descuento con un objeto
// const couponsObj = {
//   "Cupon30": 30,
//   "Cupon25": 25,
//   "Cupon20": 20,
// };

//Forma para calcular los descuentos con un array
const couponsList = [];
couponsList.push({
  name: "Cupon30",
  discount: "30"
});
couponsList.push({
  name: "Cupon20",
  discount: "20"
});
couponsList.push({
  name: "Cupon10",
  discount: "10"
});

function calcularPrecioConDescuento() {
  // (P * (100 - D)) / 100

  const price = inputPrice.value;
  const coupon = inputCoupon.value;

  /* Validación para asegurar que ingresen el descuento */
  if (!price || !coupon) {
    pResult.innerText = "Por favor llena el formulario";
    return;
  }

  let discount;

  function isCouponInArray(couponElement) { //{name, discount}
    return couponElement.name == coupon;
  }

  const couponInArray = couponsList.find(isCouponInArray); // {return objeto con name y discount}

  //const couponInArray = couponsList.filter(isCouponInArray); // [{return array con name y discount}]

  //condicional para el .fin()
  if (couponInArray) {
    //Discount ?
    discount = couponInArray
    .discount;
   } else {
    //No es valido
    pResult.innerText = "El Cupón no es válido";
     return;
   }

   //condicional para el .filter()
  // if (couponInArray.length > 0) {
  //  //Discount ?
  //  discount = couponInArray[0].discount;
  // } else {
  //  //No es valido
  //  pResult.innerText = "El Cupón no es válido";
  //   return;
  // }

  console.log(
    coupon,
    discount,
    couponInArray,
    couponsList,
  );



  //Forma para calcular descuento con un objeto
  // if (couponsObj[coupon]) {
  //   discount = couponsObj[coupon];
  // } else {
  //   pResult.innerText = "El Cupón no es válido";
  //   return;
  // }

  //Forma para calcular descuento con un array





  // /* Condicion con switch */
  // switch (coupon) {
  //   case "Cupon30":
  //     discount = 30;
  //     break;
  //   case "Cupon25":
  //       discount = 25;
  //     break;
  //   default:
  //     pResult.innerText = "El Cupón no es válido";
  //     return;
  // }

  /* Condicionales con if */

  // if (coupon == "Cupon30") {
  //   discount = 30;
  // } else if (coupon == "Cupon25") {
  //   discount = 25;
  // } else {
  //   pResult.innerText = "El Cupón no es válido";
  //   return;
  // }


  // if (discount > 100) {
  //   pResult.innerText = "El descuento debe ser menor a 100%";
  // } else {

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
}


/*Calcular el promedio*/


function calcularPromedio(ventas) {
  let sumaVentas = 0;
  for (let i = 0; i < ventas.length; i++) {
    let sumaVentas = ventas[i];
  }
  console.log(sumaVentas);
}

calcularPromedio([2,2,2,2,2]);
