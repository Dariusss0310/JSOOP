class User{
    _varsta;  //protected
    #email;  //private
    constructor(id,nume,email, varsta){
        //setam proprietatile
        this.id=id;
        this.nume=nume;
        this.#email=email;
        this._varsta=varsta;
    }
get email(){
    console.log('sunt in getter de mail')
    return this.#email;
}
set email(NewEmail){
    console.log('Sunt in setter email')
    if(NewEmail == 'dan@dan.ro'){
        this.#email=NewEmail;
    }
    else{
        throw 'Error: Invalig age!';
    }
   
}


    get myage(){
        return this._varsta;
    }
    set myage(varstaNoua){
        if(varstaNoua>0){
            this._varsta=varstaNoua
        }
        else{
            throw 'Error: Invalig age!';
            // console.error("error")
        }
    }
    mananca (calorii){
        console.log(`Mananca ${calorii} pe zi. Adresa lui de email este ${this.#email}`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} ore pe zi`);
    }
}
export {User}