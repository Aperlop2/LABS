//modificar el primer hola mundo para que diga adios con js
document.getElementById("title").innerHTML = "Adios Mundo";

//cambiar el color de la fuente de un encavezado a naranja
document.getElementById("title2").style.color = "orange";

//cambiar el color de la fuente de un encavezado a cafe
document.getElementById("title4").onclick = function(){
    document.getElementById("title4").style.color = "brown";
}