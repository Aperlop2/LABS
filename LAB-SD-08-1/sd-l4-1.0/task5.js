export class Player {
    constructor(name, level, puntosExperiencia) {
      this.name = name
      this.level = level
      this.puntosExperiencia = puntosExperiencia
      
    }
    info(){
      console.log(this.name + "has reached Level " + this.level + "!");
    } 

    subirPorPuntos(){
     
      this.level = this.level + 1;
      
    }
}


const jugador1 = new Player("Tara", 6, 500);

jugador1.info();

if (jugador1.puntosExperiencia === 500){
  jugador1.subirPorPuntos();
}


//mostrar informacion actualizada

jugador1.info();
