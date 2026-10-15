
function Eventos(){

    //seleccione la seccion con un id de contenedor
    document.querySelector("");

    //seleccione todos los elementos de la lista con una clase de "segundo"
    document.querySelector('li[class="second"]');

    //Seleccione un elemento de la lista con una clase de tercero, pero sólo el elemento de la lista dentro de la etiqueta ol.
    document.querySelector('ol .tercero');

    //Dar el texto "¡Hola!" a la sección con un id de contenedor.
    document.querySelector('section#container').innerHTML("Hola!");

    //Añade la clase principal al div con una clase de pie de página.
    document.querySelector('.footer').classList.add('principal');

    //Eliminar la clase principal en el div con una clase de pie de página.

    document.querySelector('footer').classList.remove('principal');
    
    //Crea un nuevo elemento li.
    // Dale al li el texto "cuatro".
    // Añade el li al elemento ul.

    const nuevoLi = document.createElement('li');
        nuevoLi.textContent = 'cuatro';
        document.querySelector('ul').appendChild(nuevoLi);

    




}