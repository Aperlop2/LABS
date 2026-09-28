
export class FriendAge {
    constructor(name, year, month, day){

        this.name = name
        this.year = year
        this.month = month
        this.day = day
    }

    returnAge(){
        const today = new Date();
        const birthDate = new Date(this.year, this.month, this.day);
        
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        }
            
        return this.name + "is" + "today!";
    }

}

const friend1 = new FriendAge ("Alan", 2000, 18, 14); 

console.log(friend1.returnAge());
