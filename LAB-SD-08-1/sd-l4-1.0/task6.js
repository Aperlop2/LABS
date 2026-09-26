class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    info() {
        console.log(this.name + " has reached Level " + this.level + "!");
    }
}

// 1. Creamos una NUEVA clase para el Grupo
class Party {
    constructor() {
        // Aquí identificamos el array de miembros
        this.members = []; 
    }

    // Método para AGREGAR un jugador al grupo
    addMember(player) {
        this.members.push(player);
        console.log(player.name + " se ha unido al grupo!");
    }

    // Método para ELIMINAR un jugador del grupo
    removeMember(playerName) {
        // Buscamos el índice del jugador por su nombre
        const index = this.members.findIndex(p => p.name === playerName);
        
        if (index !== -1) {
            const jugadorSacado = this.members.splice(index, 1)[0];
            console.log(jugadorSacado.name + " ha abandonado el grupo.");
        } else {
            console.log("Ese jugador no está en el grupo.");
        }
    }

    // Método extra para ver quiénes están en el grupo
    showMembers() {
        console.log("El grupo tiene " + this.members.length + " miembros:");
        this.members.forEach(player => player.info());
    }
}



const grupoDeAventura = new Party(); // Crear el grupo

const tara = new Player("Tara", 6);
const leo = new Player("Leo", 4);

grupoDeAventura.addMember(tara);      // Tara se une
grupoDeAventura.addMember(leo);       // Leo se une

grupoDeAventura.showMembers();        // Muestra a los dos

grupoDeAventura.removeMember("Leo");  // Leo se va

grupoDeAventura.showMembers();        // Ahora solo muestra a Tara