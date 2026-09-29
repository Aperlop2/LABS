// Task 3: addUser(first_name, last_name, email)
export function addUser(first_name, last_name, email){
    fetch("http://localhost:3000/users", {
        method: "POST", 
        body: JSON.stringify({
           first_name: first_name,
            last_name: last_name,
            email: email
        }),
        headers: {
            "content-Type": "application/json; charset= UTF-8"
        }
    });
}

//addUser("Carlos", "Mendoza", "carlos@example.com");
