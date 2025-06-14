//Crear un programa que nos diga si un articulo tiene descuento
let productos = [
  {
    nombre: "laptop",
    precio: 800,
    enOferta: true,
  },
  {
    nombre: "mouse",
    precio: 20,
    enOferta: false,
  },
  {
    nombre: "monitor",
    precio: 150,
    enOferta: true,
  },
];

const filtrarOfertas = (lista) => {
  let ofertas = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].enOferta) {
      ofertas.push(lista[i]);
    }
  }
  return ofertas;
};

console.log(filtrarOfertas(productos));
