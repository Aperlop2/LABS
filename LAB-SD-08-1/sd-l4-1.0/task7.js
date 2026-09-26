class Player {
  // 1. El constructor ahora recibe nombre y nivel, y crea el inventario vacío
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.inventario = []; // ¡El jugador TIENE un inventario! (Array vacío)
  }

  info() {
    console.log(this.name + " has reached Level " + this.level + "!");
  }

  // 2. Método para AGREGAR (usamos tu lógica de push)
  agregarObjeto(objeto) {
    this.inventario.push(objeto);
    console.log( objeto + " agregado al inventario.");
  }

  // 3. Método para ELIMINAR (¡Tu lógica de findIndex y splice era excelente!)
  eliminarObjeto(nombreObjeto) {
    // Buscamos el índice del objeto por su nombre (ahora son textos simples)
    const index = this.inventario.findIndex(obj => obj === nombreObjeto);

    if (index !== -1) {
      const objetoEliminado = this.inventario.splice(index, 1)[0];
      console.log( objetoEliminado + " se ha eliminado del inventario.");
    } else {
      console.log(" Este objeto no se encuentra en el inventario.");
    }
  }

  // 4. Método para MOSTRAR (Corregido: forEach en lugar de forech, y fuera de la otra función)
  mostrarInventario() {
    console.log("Inventario de " + this.name + ":");
    if (this.inventario.length === 0) {
      console.log("  (Está vacío)");
    } else {
      this.inventario.forEach(objeto => console.log("  - " + objeto));
    }
  }
}

// ==========================================
// PRUEBA TU CÓDIGO AQUÍ:
// ==========================================

// 1. Creamos al jugador
const hero = new Player("Tara", 6);

// 2. Agregamos objetos
hero.agregarObjeto("Espada de madera");
hero.agregarObjeto("Poción de vida");
hero.agregarObjeto("Mapa del tesoro");

// 3. Vemos el inventario
hero.mostrarInventario();

// 4. Eliminamos un objeto
hero.eliminarObjeto("Poción de vida");
hero.eliminarObjeto("Escudo mágico"); // Este dará el mensaje de error (¡funciona!)

// 5. Vemos el inventario final
hero.mostrarInventario();