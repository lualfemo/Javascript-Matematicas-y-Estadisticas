
function calcularPromedio(ventas) {

  let sumaVentas = 0;

  for (let i = 0; i < ventas.length; i++) {
    sumaVentas = sumaVentas + ventas[i];
    console.log(sumaVentas);
  }
  const promedio = sumaVentas / ventas.length;
  console.log("El promedio de la ventas es: " + promedio);
}

calcularPromedio([2,10,5,8,20,17,4,3,13,2]);