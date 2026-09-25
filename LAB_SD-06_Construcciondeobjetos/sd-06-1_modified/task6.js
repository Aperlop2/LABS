// Crear constructor que describa una lista de compras
function ListaProductos(producto, precio) { // (Corregí "presio" a "precio" 😉)
    this.producto = producto;
    this.precio = precio;
    this.cantidad = [];

    this.mostrarInfoProductos = function() {
        return this.producto + " cuesta " + this.precio;
    }
}

// 1. ¡Aquí faltaba el 'new'! Le puse un nombre genérico y precio 0 para que funcione como contenedor.
const productsList = new ListaProductos("Lista General", 0);

const producto1 = new ListaProductos("leche", 60);
const producto2 = new ListaProductos("huevo", 100);

console.log("Estos son los productos que tenemos: ");
console.log(producto1.mostrarInfoProductos());
console.log(producto2.mostrarInfoProductos());

const numProductos = Number(prompt("¿Cuántos productos compraste?"));

// 2. Agregamos 'let' antes de la 'i' para que sea una variable local del bucle (buena práctica)
for (let i = 1; i <= numProductos; i++) {
    
    // 3. Sintaxis corregida: solo guardamos el texto en una variable
    const nombreProducto = prompt("Inserta tu producto " + i);

    // 4. Lógica corregida: Usamos '||' (O) en lugar de '&&' (Y)
    if (nombreProducto === "leche" || nombreProducto === "huevo") {
        
        const cantidadProducts = Number(prompt("¿Cuántos " + nombreProducto + "s compraste?"));
        
        // 5. El push va al array del objeto, no a la variable de texto
        productsList.cantidad.push(cantidadProducts);
        console.log("¡Agregado: " + cantidadProducts + " de " + nombreProducto + "!");
        
    } else {
        // 6. Quitamos el 'return'. Solo informamos y el bucle continúa su camino.
        console.log("No contamos con el producto: " + nombreProducto);
    }
}

console.log("Resumen de cantidades compradas: ", productsList.cantidad);