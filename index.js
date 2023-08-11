//Ingreso de usuarios
let usuario = confirm(
  "Suscribite a nuestra pagina y enterate todas las novedades!"
);

let nombre, apellido, email;
//Pasamos a JSON
let personaJson;
if (usuario === true) {
  nombre = prompt("Ingrese su nombre");
  apellido = prompt("Ingrese su apellido");
  email = prompt("Ingrese su email");
  const persona = new Persona(nombre, apellido, email);
  alert(`Bienvenido ${persona.nombre} ${persona.apellido}`);
  personaJson= JSON.stringify(persona)
}
//Constructora para usuarios
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
}

localStorage.setItem('personaJson',personaJson)
 //let usuarios = [{ persona }];



