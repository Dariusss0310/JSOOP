class Carte{
    static reducere = 10;
    mypret;
    constructor(titlu,autor,editura,an_aparitie,nr_pagini)  {
        this.titlu=titlu;
        this.autor = autor;
        this.editura = editura;
        this.an_aparitie = an_aparitie;
        this.nr_pagini=nr_pagini
    } 
    get pret(){
        console.log('sunt in getter');
        return this.mypret;
    }
    set pret(pretNou){
        console.log('sunt in setter');
        if(pretNou<=0){
            throw 'Pretul nu poate fi actualizat'
        }
        else{
            this.mypret=pretNou;
        }
       
    }
    info(){
        console.log(`Titlul este ${this.titlu}, autor ${this.autor},editura ${this.editura}`);
    }
    obtine_titlu(){
        console.log(`${this.titlu}`)
    }
    obtine_autor(){
        console.log(`${this.autor}`)
    }
    // modificapret(pretNou){
    //     if(pretNou < 100 && pretNou > this.pret){
    //         this.pret = pretNou;
    //     }
    // }
    // reducere(){
    //     this.pret = this.pret - (Carte.reducere* this.pret) / 100
    //     console.log(`Pretul cu reducere este ${this.pret}`)
    // }

}



