listado = [];

function registro(nombre, apellido, edad, cargo, remuneracion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;
    this.remuneracion = remuneracion;
}

function agregarRegistro(){
    var nombre = prompt("Ingrese nombre");
    var apellido = prompt("Ingrese apellido");
    var edad = prompt("Indique edad");
    var cargo = prompt("Escriba cargo");
    var remuneracion = prompt("Indique Remuneración");
    var miRegistro = new registro(nombre, apellido, edad, cargo, remuneracion);
    listado.push(miRegistro);
    console.log(listado);
    imprimirRegistro();
}

function imprimirRegistro(){
    var tabla = document.getElementById("lista-personal");
    var fila = tabla.insertRow();
    var celdaNombre = fila.insertCell(-1);
    var celdaApellido = fila.insertCell(-1);
    var celdaEdad = fila.insertCell(-1);
    var celdaCargo = fila.insertCell(-1);
    var celdaRemuneracion = fila.insertCell(-1);
    celdaNombre.innerHTML = listado[listado.length - 1].nombre;
    celdaApellido.innerHTML = listado[listado.length - 1].apellido;
    celdaEdad.innerHTML = listado[listado.length - 1].edad;
    celdaCargo.innerHTML =listado[listado.length - 1].cargo;
    celdaRemuneracion.innerHTML = listado[listado.length - 1].remuneracion;
}

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("btn-agregar-registro").addEventListener('click', agregarRegistro);
});