import { Animal } from "./Animal.js";
class Caine extends Animal{
    constructor(greutate,nrPicioare,nume){
        super(greutate,nrPicioare);
        this.nume=nume;
     
    }
    info(){
        console.log(`Numele meu este ${this.nume}`);
        super.comunica('ham ham');
    }
}
export {Animal,Caine};