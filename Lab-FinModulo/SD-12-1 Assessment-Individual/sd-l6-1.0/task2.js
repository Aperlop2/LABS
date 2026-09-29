// Task 2: listUsers()
export function listUsers(){
    fetch("http://localhost:3000/users", {
        method: "GET",
    })
    .then(response => response.json())
    .then(users => {
        users.forEach(usuario => {
            console.log(`ID: ${usuario.id} | Nombre: ${usuario.first_name} | Apellido ${usuario.last_name} Email: ${usuario.email}`);

        });
    })
    .catch(error => console.log("Error: ", error));
}
