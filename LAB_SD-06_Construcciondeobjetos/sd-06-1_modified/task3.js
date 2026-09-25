// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg

    this.printMail = function () {
      console.log(this.subject + ": " + this.message);
    };
    
  };

  const asuntoUsuario = prompt("asunto: ");
  const mensajeUsuario = prompt("mensaje: ");
  
  const newMail = new Mail( asuntoUsuario, mensajeUsuario);
  
  // Type your code above this line!
  
  newMail.printMail();