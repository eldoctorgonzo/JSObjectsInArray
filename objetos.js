listado = [];

function registro(marca, modelo, year, version, kilometraje){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.version = version;
    this.kilometraje = kilometraje;
}

function agregarRegistro(){
    var marca = prompt("Ingrese Marca");
    var modelo = prompt("Ingrese Modelo");
    var year = prompt("Indique Año");
    var version = prompt("Ingrese Versión");
    var kilometraje = prompt("Indique Kilometraje");
    var miRegistro = new registro(marca, modelo, year, version, kilometraje);
    listado.push(miRegistro);
    console.log(listado);
    imprimirRegistro();
}

function imprimirRegistro(){
    var tabla = document.getElementById("lista-automoviles");
    var fila = tabla.insertRow();
    var celdaMarca = fila.insertCell(-1);
    var celdaModelo = fila.insertCell(-1);
    var celdaYear = fila.insertCell(-1);
    var celdaVersion = fila.insertCell(-1);
    var celdaKilometraje = fila.insertCell(-1);
    celdaMarca.innerHTML = listado[listado.length - 1].marca;
    celdaModelo.innerHTML = listado[listado.length - 1].modelo;
    celdaYear.innerHTML = listado[listado.length - 1].year;
    celdaVersion.innerHTML =listado[listado.length - 1].version;
    celdaKilometraje.innerHTML = listado[listado.length - 1].kilometraje;
}

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("btn-agregar-registro").addEventListener('click', agregarRegistro);
});