let num = document.getElementById('input#fNum')
let lista = document.getElementById('select#fLista')
let res = document.getElementById('div#res')
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

    } else {
        alert('Valor inválido ou já adicionado!')
    }

    //Apagar para poder adicionar outro valor
    num.value = ''
    //Cursor volta a piscar na caixa input
    num.focus()
}