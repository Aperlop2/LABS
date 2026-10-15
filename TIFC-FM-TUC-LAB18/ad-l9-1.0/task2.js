
function getFormvalue(event){

    //evitar que el formulario se envie y recargue la pagina
    event.preventDefault();
    const primerNombre = document.querySelector('input[name="fname"]').value;
    const segundoNombre = document.querySelector('input[name="lname"]').value;

    console.log(`${primerNombre}, ${segundoNombre}`);
    alert(`${primerNombre}, ${segundoNombre}`);

}
