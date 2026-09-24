// Usé palabras distintas para que notes el cambio claramente 
// cuando aparezca un número primo impar (3, 5, 7, 11, 13...)
let buzzWords = [
    "Bark",
    "Awoo",
    "Bang"
 ];
let contadorPalabras = 0;

for (let i = 1; i <= 105; i++) {
  
  // PASO 1: Verificar si es PRIMO IMPAR
  let esPrimo = true;
  
  if (i <= 1) {
    esPrimo = false; // El 1 no es primo
  } else if (i === 2) {
    esPrimo = false; // El 2 es primo, pero NO es impar, así que lo ignoramos
  } else {
    // Probamos divisores desde 2 hasta i-1
    for (let divisor = 2; divisor < i; divisor++) {
      if (i % divisor === 0) {
        esPrimo = false; // Encontramos un divisor, ya no es primo
        break; // Salimos del bucle interno para ahorrar tiempo
      }
    }
  }

  // PASO 2: Si es primo impar, usamos la palabra del array
  if (esPrimo) {
    console.log(buzzWords[contadorPalabras]);
    contadorPalabras++; // Avanzamos a la siguiente palabra para el próximo primo
    
    // Opcional: Si se acaban las palabras del array, volvemos a empezar desde la primera
    if (contadorPalabras >= buzzWords.length) {
      contadorPalabras = 0; 
    }
  } 
  // PASO 3: Si NO es primo impar, aplicamos las reglas de FizzBuzz normales
  else {
    let resultado = ""; // Creamos una caja de texto vacía
    
    if (i % 3 === 0) resultado += "Fizz";
    if (i % 5 === 0) resultado += "Buzz";
    if (i % 7 === 0) resultado += "Woof";
    
    // Si la caja sigue vacía, significa que no es divisible por 3, 5 ni 7
    if (resultado === "") {
      console.log(i);
    } else {
      console.log(resultado); // Imprime la combinación (ej: "FizzBuzz")
    }
  }
}