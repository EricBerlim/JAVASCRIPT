/*
let num = [5, 8, 4]
num [3] = 6
num.push(7)
num.sort()
console.log(num)
*/

let num = [5, 8, 2, 9, 3]

num.push(2)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor é ${num[0]}.`)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)

} else {
    console.log(`O valor está na posição ${pos}`)   
}