

// Type your code below this line!
function FriendsList(){
    this.nombreDelArray = [];

    this.mostrarNombres = function(){
        return this.nombreDelArray;
    };
}
//crear el obgeto real antes de llenarlo
const miLista = FriendsList();

// Type your code above this line!
const nombres_num = Number(prompt("cuantos nombres quieres insertar?"));

for (let i = 1; i<= nombres_num; i++){

    const nombres = prompt("inserte el nombre " + i + ":");

    miLista.nombreDelArray.push(nombres);
};

console.log(miLista.mostrarNombres());


