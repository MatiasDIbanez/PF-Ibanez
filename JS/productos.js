//Traemos los productos
const getProductos = async()=>{
  const respuesta = await fetch('/j.son/data.json')
  const data=  await respuesta.json()
  return data
}
//Los guardamos en un arra productos
let productos =[]
getProductos()
  .then(productosArray => {
    productos = productosArray;
    console.log(productos); 
  })
  .catch(error => {
    console.error('Error en cargan los datos:', error);
  });
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
  if(list){sumarProductoAlCarritoMenu(productoElegido.nombre,cantidadValorElemento,productoElegido.precio);}
}

function buscoProducto(ID) {
  for (const producto of productos) {
    if (ID === producto.identificador) {
      return producto;
    }
  }
}
//Funcion para el DOM de carrito
function sumarProductoAlCarritoMenu(nombre,cantidad,precio) {
  //Traemos a el div del carrito
  let carritoMenu = document.getElementById("carritoBar");
  //Agregamos el producto al carrito
  let itemCarritoContenido=document.createElement("div")
  //Total 
  let precioTotal=cantidad*precio
 //Definimos el innerHTML del elemento con una plantilla de texto
  itemCarritoContenido.innerHTML = `
  <div class="itemCarrito" class="enunciadosCarrito">
    <div class="productosCarrito">${nombre}</div>
    <div class="info">${cantidad}</div> 
    <div class="precio">$${precioTotal}</div> 
    <button class="btn-eliminar">
      <i class="fa fa-trash"></i>
    </button>
  </div>
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
  buttonClicked.parentElement.parentElement.remove()
  carrito.pop()
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
