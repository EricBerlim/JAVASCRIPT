let num = document.querySelector('input#fNum')
let lista = document.querySelector('select#fLista')
let res = document.querySelector('div#res')
let valores = []

//Se for um valor entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//Se na lista o número for diferente de -1, significa que o valor Não foi encontrado na Lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

//Vai adicionar se for Número && Não estiver na Lista
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))

        //Criar um item para a lista e a tag 'option'
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`

        //Para adicionar na lista
        lista.appendChild(item)

        //Limpa ao adicionar outro valor após finalizar
        res.innerHTML = ''

    } else {
        alert('Valor inválido ou já adicionado!')
    }

    //Apagar para poder adicionar outro valor
    num.value = ''
    //Cursor volta a piscar na caixa input
    num.focus()
}

function finalizar() {
    if (valores.value.length == 0) {
        alert('Adicione valores antes de finalizar!')

    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0

        //Analisa 1 por 1 e verificar qual é o maior
        for (let pos in valores){
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        média = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma foi ${soma}.</p>`
        res.innerHTML += `<p>A média é ${média}.</p>`
    }
}