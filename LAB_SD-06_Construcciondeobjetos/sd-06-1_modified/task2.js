function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  const asuntoUsuario = prompt("Asunto: ");
  const mensajeUsuario = prompt("mensaje: ");
  const newMail = new Mail(asuntoUsuario, mensajeUsuario);
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message);