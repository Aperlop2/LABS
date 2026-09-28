export function ageCalculator(year, month, day) {

    //asignar la feca actual y cumpleanos
    const today = new Date();
    const birthdate = new Date (year, month, day);

    //getfullyear se utiliza para obtener el ano completo de 4 digitos
    //calcular el ano y mes
    let age = today.getFullYear - birthdate.getFullYear;
    let m = today.getMonth - birthdate.getMonth;

    //si el mes es antes de el mes de nacimiento 
    //asi como tambien el dia de nacimiento esta antes de la fecha de naciniento
    //restale un ano ya que aun no los ha cumplido
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())){

        age --;
    }
    return age;
    
}

ageCalculator();