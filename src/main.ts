class Aluno  {
    nome!: string;
    idade!: number;

    constructor(n: string, i: number){
        this.nome = n;
        this.idade = i;
    }
}

let nomeListDeAlunos: string[] = ["Helton", "Sunto", "Melani"];


function somaDeDoisNumero(numero1: number, numero2: number): number{
    return numero1 + numero2;
}

let alunoFulano: Aluno = new Aluno("Sunto", 17);
console.log(alunoFulano)

console.log(somaDeDoisNumero(3,5))

for(let i = 0; i< nomeListDeAlunos.length; i++) {
    console.log("Hola ",nomeListDeAlunos[i])
}