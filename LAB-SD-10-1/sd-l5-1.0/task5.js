export function rubricPassFail(puntuacion) {

    
    if ( puntuacion>= 5){
        return "Pass";
    }else{
        return "Fail";
    }
}
rubricPassFail();