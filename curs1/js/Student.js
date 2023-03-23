class Student{
    nota1=0
    nota2=0
    constructor(id, nume, varsta,){
    this.id=id;
        this.nume=nume;
        this.varsta=varsta;
        
}
salut(){
    console.log(`Salut numele meu este${this.nume}`)
}
examen(nota1,nota2){
    this.nota1=nota1
    this.nota2=nota2
    console.log(`La examene am luat notele ${this.nota1} si ${this.nota2}`)
}
calMedia(nota1,nota2){
   let media = (this.nota1+this.nota2)/2
    console.log(`Media notelor este ${media} `)
}


}
