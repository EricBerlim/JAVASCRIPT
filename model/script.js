function verificar(params) {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ano')
    var res = document.getElementById('res')
    //ou var res = document.querySelector('div#res')
    
    if (fAno.value.length == 0 || fAno.value > ano) {
       alert('[ERRO] Verifique os dados e tente novamente! ')

    } else {
        var fSex = document.getElementsByName('radSex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            gênero = 'masculino'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        
        } else if (fSex[1].checked) {
            gênero = 'feminino'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
            }

        } else {
            gênero = 'outro'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebe-o.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-o.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'jovem-o.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-o.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Pessoa do gênero ${gênero} com ${idade} anos.`
        
        res.appendChild(img)
    }
}