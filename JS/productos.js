//Productos
class Producto {
  constructor(nombre, categoria, stock, identificador) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.stock = stock;
    this.identificador = identificador;
  }
}
const item1 = new Producto("Carne suave", "Clasica", 100, "CS");
const item2 = new Producto("Carne picante", "Clasica", 100, "CP");
const item3 = new Producto("Pollo", "Clasica", 100, "PO");
const item4 = new Producto("Pollo con salsa blanca", "Clasica", 100, "PB");
const item5 = new Producto("Roquefort con jamón", "Clasica", 100, "RJ");
const item6 = new Producto("Jamón y queso", "Clasica", 100, "JQ");
const item7 = new Producto("Caprese", "Vegetariana", 100, "CA");
const item8 = new Producto("Queso y cebolla", "Vegetariana", 100, "QC");
const item9 = new Producto("Humita", "Vegetariana", 100, "HU");
const item10 = new Producto("Calabaza", "Vegetariana", 100, "CB");
const item11 = new Producto("Verdura", "Vegetariana", 100, "VE");
const item12 = new Producto("Diabla", "Especial", 100, "DI");
const item13 = new Producto("Cuatro queso", "Especial", 100, "4Q");
const item14 = new Producto("Cheese burger", "Especial", 100, "CH");
const item15 = new Producto("No pollo", "Vegana", 80, "NP");
const item16 = new Producto("Caprese", "Vegana", 80, "CV");
const item17 = new Producto("Agridulce", "Vegana", 80, "AG");
const item18 = new Producto("New mix", "Vegana", 80, "NM");
const item19 = new Producto("Membrillo", "Dulce", 30, "DM");
const item20 = new Producto("Batata", "Dulce", 30, "DB");
const item21 = new Producto("Chocotorta", "Postre", 10, "CHOCO");
const item22 = new Producto("Bomba oreo", "Postre", 10, "BOMB");
const item23 = new Producto("Brownie explotado", "Postre", 10, "BROW");
const item24 = new Producto("Vegano", "Postre", 10, "VEGAN");
let productos = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
  item21,
  item22,
  item23,
  item24,
];
//Funcion para agregar item 
const botonesParaAgregar = document.querySelectorAll(".agregar");
botonesParaAgregar.forEach((boton) => {
  boton.addEventListener("click", agregarCarrito);
});
const carrito = [];
function agregarCarrito(event) {
  let list=true;
  const idDelBoton = event.target.id;
  console.log(idCant=idDelBoton+"Cant")
  const cantidadValorElemento = document.getElementById(idCant).value;
  console.log("Se hizo clic en el botón con ID:", idDelBoton,cantidadValorElemento);
  let productoElegido = buscoProducto(idDelBoton);
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].identificador === idDelBoton) {
      // alert("El item ya se encuentra en el carrito");
      Swal.fire({
       title: '¡El producto ya se encuentra en el carrito!',
        icon:'error',
      }) 
      carrito.splice(i, 1);
      list=false;
    }
  }
  carrito.push(productoElegido);
  if(list){sumarProductoAlCarritoMenu(productoElegido.nombre,cantidadValorElemento);}
}

function buscoProducto(ID) {
  for (const producto of productos) {
    if (ID === producto.identificador) {
      return producto;
    }
  }
}
//Funcion para el DOM de carrito
function sumarProductoAlCarritoMenu(nombre,cantidad) {
  //Traemos a el div del carrito
  let carritoMenu = document.getElementById("carritoBar");
  //Agregamos el producto al carrito
  let itemCarritoContenido=document.createElement("div")
 //Definimos el innerHTML del elemento con una plantilla de texto
  itemCarritoContenido.innerHTML = `
  <div class="productosCarrito">
    <div class="productosCarrito">${nombre}</div>
  </div>
  <div class="info">${cantidad}</div>
  <button class="btn-eliminar">
  <i class="fa fa-trash"></i>
  </button>
  `;
  //Agregamos al contenedor del carrito
  itemCarritoContenido.className="itemCarrito"
 carritoMenu.append(itemCarritoContenido)
   //Agregamos eliminar producto
 let botonEliminar=document.getElementsByClassName("btn-eliminar");
for (const boton of botonEliminar){
  boton.addEventListener('click',eliminarClick)
}
  }
  //Botones de suma y resta para productos
  let botonSuma=document.querySelectorAll(".fa-plus");
  botonSuma.forEach((suma) => {
    suma.addEventListener("click", sumaClick);
  })
    function sumaClick(event){
      let buttonClicked = event.target;
      let selector = buttonClicked.parentElement;
      console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
      let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
      cantidadActual++;
      selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
      }
    let botonResta=document.querySelectorAll(".fa-minus");
  botonResta.forEach((resta) => {
    resta.addEventListener("click", restaClick);
  })
   function restaClick(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    }
     }
//Eliminar producto del carrito
let botonEliminar=document.getElementsByClassName("btn-eliminar");
for (const boton of botonEliminar){
  boton.addEventListener('click',eliminarClick)
}
// let botonEliminar=document.getElementsByClassName("btn-eliminar")[0].addEventListener("click", eliminarClick);

 function eliminarClick(event){
  let buttonClicked = event.target;
  console.log(buttonClicked.id)
  buttonClicked.parentElement.remove()
  console.log(carrito.pop())
   }
//Funcion filtrado
// function FilterCategoria(categoria){
//   let filtrado=[]
//   return filtrado= productos.filter(
//     (elemento) => elemento.categoria.toLowerCase() === categoria.toLowerCase()

//   );
// }
// //Funcion muestra
// function MuestraCategoria(categoriaFiltrada){
//   muestra=[]
//   for (let index=0;index<categoriaFiltrada.length;index++) {
//         muestra[index]= categoriaFiltrada[index].nombre
//        }
//        return muestra;
// }
// //Seleccion de productos
// let suma = 0,
//  continuar;

// do{
//   let cantidad=0;
//   let  categoriaSeleccionada=prompt("---Seleccione una categoria---\nClasica\nEspecial\nVegana\nDulce\nPostre");
//  let productos= MuestraCategoria(FilterCategoria(categoriaSeleccionada))
//  do{ produc=prompt(`Elija su Producto:\n ${productos}`)
//   if(productos.includes(produc)){
//     cantidad=Number(prompt('Elija la cantidad que desea'))
//     suma=suma+cantidad

//   }
// }while(confirm('Seguir en la misma categoria?'));
//  continuar  = prompt("¿Desea seleccionar otro categoria? (S/N)");
//    } while (continuar === "S");

//Pagos
// console.log("La suma de los productos seleccionados es: " + suma);

// let medio = Number(
//   prompt(
//     "Seleccione su medio de pago:2\n1.Efectivo - 2.Debito - 3.Credito - 4.Qr"
//   )
// );
// let pago;
// switch (medio) {
//   case 1:
//     pago = "efectivo";
//     break;
//   case 2:
//     pago = "debito";
//     break;
//   case 3:
//     pago = "credito";
//     break;
//   case 4:
//     pago = "qr";
//     break;
//   default:
//     alert("No se reconoce medio de pago");
//     break;
// }
// function descuentoPorDocena(cantidadSeleccionada) {
//   if (1 >= cantidadSeleccionada / 12 < 2) {
//     return 0.925;
//   } else if (2 >= cantidadSeleccionada / 12 < 3) {
//     return 0.925;
//   } else if (3 >= cantidadSeleccionada / 12 < 4) {
//     return 0.9;
//   } else if (4 >= cantidadSeleccionada / 12 > 10) {
//     return 0.8;
//   } else {
//     return 1;
//   }
// }
// const precioUnidad=220;
// function pagos(medio, cantidad) {
//   if (medio === "efectivo") {
//     return precioUnidad * cantidad * descuentoPorDocena(cantidad);
//   }
//   else {
//     return precioUnidad * cantidad;
//   }
// }
// let precioAPagar=pagos(pago, suma)
// alert(`El precio a pagar es $${precioAPagar}`)
