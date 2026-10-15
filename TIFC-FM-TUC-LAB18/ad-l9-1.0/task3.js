
function Enlaces(){

   const enlaces = document.querySelectorAll('a');
   const totalEnlaces = enlaces.length;
   const primerEnlace = enlaces[0].href;
   const ultimoEnlace = enlaces[totalEnlaces - 1].href;

   alert(`numero total de enlaces ${totalEnlaces} \n 
    primer enlace ${primerEnlace}\n
    ultimo enlace ${ultimoEnlace}`);

} 
