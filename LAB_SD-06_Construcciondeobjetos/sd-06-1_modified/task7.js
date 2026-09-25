
function DatosCoche(marca, modelo, ano, color, numPuertas, motoroElectronico, masCaracteristicas){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.color = color
    this.numPuertas = numPuertas 
    this.motoroElectronico = motoroElectronico
    this.masCaracteristicas = masCaracteristicas 
}
//almacenar datos del coche por el usuario
const datosAlmacenados = new DatosCoche([], [], [], [], [], [], []);

console.log("registro de coche:");
function registroCoche(){
    const marcaCoche = prompt("introduzca la marca de tu coche: ");
    datosAlmacenados.marca.push(marcaCoche);

    const modeloCoche = prompt("introduzca el modelo de tu coche");
    datosAlmacenados.modelo.push(modeloCoche);

    const anoCoche = prompt("introduzca el año de tu coche");
    datosAlmacenados.ano.push(anoCoche);

    const colorCoche = prompt("introduzca el color de tu coche");
    datosAlmacenados.color.push(colorCoche);

    const elnumPuertas = prompt("introduzca el numero de puertas");
    datosAlmacenados.numPuertas.push(elnumPuertas);

    const motorCoche = prompt("motor de conbustion o electronico?");
    datosAlmacenados.motoroElectronico.push(motorCoche);

    const masCaracteris = prompt("deseas agregar mas caracteristicas?");
    if (masCaracteris.toLowerCase() === "si"){
        const otras = prompt("que otras caracteristicas deseas agregar?");
        datosAlmacenados.masCaracteris.push(otras);
    }

    console.log("coche registrado!");

};
registroCoche();
console.log("registro de tu coche: ");
console.log(datosAlmacenados);



