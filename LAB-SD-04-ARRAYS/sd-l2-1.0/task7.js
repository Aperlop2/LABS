const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  //agregar solo un numero a una fila existente
  arr[0].push(10, 11, 12);
  //console.log(arr);

  //agregar una fila completa de numeros
  arr.push([3,4,6,7,9,6,4,4,3,8]);
  //console.log(arr);

  //eliminar un solo numero de una sola fila
  arr[0].splice(4,1);
  //console.log(arr);

  //invertir una de las filas sin afectar a las demas
  arr[0].reverse();
  //console.log(arr);

