export function rubricExcellent(puntuacion) {



    if ( puntuacion>= 5){
        return "Pass";
    } else if( puntuacion >=9 ){

        return "Excelent";
    } else if (puntuacion = 11){
        return "Perfect"
    } else{
        return "Fail";
    }
}

rubricExcellent();