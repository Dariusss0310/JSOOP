class Carte{
    constructor(titlu,autor,editura,an_aparitie,pret,nr_pagini)  {
        this.titlu=titlu;
        this.autor = autor;
        this.editura = editura;
        this.an_aparitie = an_aparitie;
        this.pret = pret;
        this.nr_pagini=nr_pagini
    } 
    obtine_titlu(){
        console.log(`${this.titlu}`)
    }
    obtine_autor(){
        console.log(`${this.autor}`)
    }
    modifica_pret(pretNou){
        if(pretNou < 100 && pretNou > this.pret){
            this.pret = pretNou;
        }
    }
    reducere(procent){
        this.pret = this.pret - (procent/100* this.pret)
        console.log(`Pretul cu reducere este ${this.pret}`)
    }

}

const carte = new Carte('Poezii','M.Eminescu','Humanites',2010,50,120);
carte.modifica_pret(75);
console.log(carte)
carte.reducere(10)
console.log()