const UserController = require("./user-controller");
const User = require("./user");

describe("Pruebas de UserController", () => {
  let userController;
  let user1;
  let user2;

  // Esto se ejecuta ANTES de cada test, garantizando que empezamos desde cero
  beforeEach(() => {
    userController = new UserController();
    user1 = new User(1, "Santiago", "santiago@generation.org");
    user2 = new User(2, "Maria", "maria@generation.org");
  });

  
  //  1 prueba para add() que verifica un usuario que no está en la lista
  test('add() debería agregar correctamente un usuario nuevo a la lista', () => {
    // 1. Verificamos que empieza vacía (el usuario NO está)
    expect(userController.getUsers()).toHaveLength(0);
    
    // 2. Agregamos el usuario
    userController.add(user1);
    
    // 3. Verificamos que ahora SÍ está en la lista
    expect(userController.getUsers()).toContain(user1);
    expect(userController.getUsers()).toHaveLength(1);
  });

  // 1 prueba para remove() que verifica que un usuario ya no está en la lista
  test('remove() debería eliminar un usuario y verificar que ya no está en la lista', () => {
    // 1. Primero lo agregamos
    userController.add(user1);
    expect(userController.getUsers()).toContain(user1); // Condición previa
    
    // 2. Lo eliminamos
    userController.remove(user1);
    
    // 3. Verificamos que YA NO esté en la lista
    expect(userController.getUsers()).not.toContain(user1);
    expect(userController.getUsers()).toHaveLength(0);
  });

  
  // 2 pruebas unitarias para findByEmail()
  
  test('findByEmail() debería retornar el usuario cuando el email SÍ existe', () => {
    userController.add(user1);
    
    const resultado = userController.findByEmail("santiago@generation.org");
    
    expect(resultado).toEqual(user1);
    expect(resultado.name).toBe("Santiago");
  });

  test('findByEmail() debería retornar undefined cuando el email NO existe', () => {
    userController.add(user1); // Agregamos a Santiago
    
    // Buscamos un email que no hemos agregado
    const resultado = userController.findByEmail("noexiste@generation.org");
    
    expect(resultado).toBeUndefined();
  });

 
  // 2 pruebas unitarias para findById()
  test('findById() debería retornar el usuario cuando el ID SÍ existe', () => {
    userController.add(user2);
    
    const resultado = userController.findById(2);
    
    expect(resultado).toEqual(user2);
    expect(resultado.id).toBe(2);
  });

  test('findById() debería retornar undefined cuando el ID NO existe', () => {
    userController.add(user1); // Agregamos al usuario con ID 1
    
    // Buscamos un ID que no existe (ej. 999)
    const resultado = userController.findById(999);
    
    expect(resultado).toBeUndefined();
  });

});