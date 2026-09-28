class Producto {
    constructor (nombre, presio, disponible){
        this.nombre = nombre
        this.presio = presio
        this.disponible = disponible

    };
    mostrarInfo(){
        console.log(this.nombre + " cuesta $: " + this.presio);
        //llamar el otro metodo
        this.cambiarDisponibolidad();
    }
    cambiarDisponibolidad(){
        if(this.disponible === true){
            console.log("Se encuentra disponible :)");
        }else {
            console.log("No se encuentra disponible :(");
        }
    }

};

class Maquillaje extends Producto{

    constructor(nombre, presio, disponible, tono){
        super(nombre, presio, disponible)
        this.tono = tono;
    }
    mostrarInfo(){

        console.log(this.nombre + " cuesta: $ " + this.presio);
        this.cambiarDisponibolidad();
    }
}

const producto1 = new Producto ("sudadera", 350, true);
const producto2 = new Producto ("pantalon de mezclilla", 450, true);
const producto3 = new Producto ("vestido rojo", 500, false);
const producto4 = new Producto ("playera blanca", 250, true);

const productMakeup = new Maquillaje ("labial", 70, true);

producto3.mostrarInfo();
productMakeup.mostrarInfo();
