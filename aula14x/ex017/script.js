function tabuada() {
    let num = document.getElementById('txtN')
    let tab = document.getElementById('selTab')

    tab.innerHTML = '' //Limpa antes de iniciar outra

    if (num.value.length == 0) {
        alert('Digite um número, por favor!')

    } else {
        let n = Number(num.value)
        let c = 1

        while (c <= 10) {
            let item = document.createElement('option')
            
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`

            tab.appendChild(item)
            c++
        }
    }
}