let pessoa = {nome:'José', 
sexo:'M', 
peso: 85.4, 
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg.`)

const foo = [1,2,3];
const [n] = foo;
console.log(n);