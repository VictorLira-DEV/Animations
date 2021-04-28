function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano || fano.value < 1900) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.querySelectorAll("input[name='radsex']");
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero ='homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','images/foto-menino.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'images/foto-jovem-m.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'images/foto-homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'images/foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'images/foto-menina.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'images/foto-jovem-f.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'images/foto-mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'images/foto-idosa.png')
            }
        }
        res.innerHTML = `detectamos  ${genero} de ${idade} anos de idade`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}   