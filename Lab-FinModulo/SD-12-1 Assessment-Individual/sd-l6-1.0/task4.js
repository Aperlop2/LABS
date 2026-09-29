// Task 4: delUser(number)
export function delUser(id){
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        "content-TYpe": "application/json; charset=UTF-8"
      }  
    });
}

delUser(9);
