const itemsContainer = document.querySelector("#list-items")

function addItem(item) {//CREA UN ITEM
  //CREA SECCION CON LA CLASE card w-75
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"

  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

async function fetchColorsList() {
  try{
    //hacer la peticion ala api
    const response = await fetch("http://reqres.in/api/unknown");
    //verificar si la respuesta fue exitosa
    if(!response.ok){
      throw new Error (`Error en la peticion: ${response.status}`);
    }
    //convertir la respuesta en un objeto json
    const jsonData = await response.json();
    //extraer el array delos colores del data
    const colores = jsonData.data;

    //guardar en el localstorage
    //solo gurda texto por lo que se convierte de json a stringfy
    localStorage.setItem("coloresGuardados", JSON.stringify(colores));
    console.log("colores guardados en el local storage");
    //recorrer cada elemento del array y pasarlo a la funcion addItem
    colores.forEach(item => {
      addItem(item);
    });
  } catch (error){
    console.error("hubo un error al obtener la lista de colores", error);
    itemsContainer.innerHTML = "<p>Lo sentimos, no se pudieron cargar los colores.</p>";
  }
  
}

function loadColorsFromStorage() {
  //recuperar el texto guardado en localStorage
  const coloresGuardados = localStorage.getItem("coloresGuardados");
  //verificar si existe algo si no, devuelve null
  if(!coloresGuardados){
    console.warn("no hay colores guardados en localtorage");
    return
  };

  //convertir el texto de vuelta a array de objetos json
  const colores = JSON.parse(coloresGuardados)
  //pintamos cada color en el html con la funcion addItem
  colores.forEach(item=>{
    addItem(item);
  });
  console.log("colores guardados desde el localstorage");
  
}

function clearList(){
  itemsContainer.innerHTML="";
  localStorage.removeItem("coloresGuardados");
  console.log("lista borrada");
}

const btnBorrar = document.querySelector("#Borrar");

btnBorrar.addEventListener("clck", clearList);

// Seleccionamos el botón
const btnCargar = document.querySelector("#btnCargar");

// Cuando hagan clic, llamamos a fetchColorsList
btnCargar.addEventListener("click", fetchColorsList);

fetchColorsList()
loadColorsFromStorage()