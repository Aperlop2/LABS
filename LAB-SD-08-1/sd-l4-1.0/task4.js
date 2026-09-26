export class Player {
    constructor(name, level) {
      this.name = name
      this.level = level
      
    }
    info(){
      console.log(this.name + "has reached Level " + this.level + "!");
    } 

    levelUp(){
      this.level = this.level + 1;
    }
}

const jugador1 = new Player("Tara", 6);

//mostrar informacion de jugador
jugador1.info();

//subir de nivel
jugador1.levelUp();

//mostrar informacion actualizada
jugador1.info();

