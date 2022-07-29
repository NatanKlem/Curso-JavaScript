function verificar(){
    var a = new Date()
    var ano = a.getFullYear()
    var perguta = document.querySelector('input#idade')
    var idade = ano - Number(perguta.value) 
    var res = document.querySelector('div#res')
    var img = document.querySelector('div#img')
    if (perguta.value.length == 0 || perguta.value > ano){
        window.alert('[ERRO] Vertifique os dados e tente novamente!')
    }else{
        var sex = document.getElementsByName('radsex')
        var gen = ''
    }if (sex[0].checked){
        gen = 'Homem'
        if(idade >=0 && idade < 10){
            //kid
            img.innerHTML = '<img src="kid-homem.png" alt="kid">'
        }else if (idade < 21){
            //jovem
            img.innerHTML = '<img src="jovem-homem.png" alt="kid">'
        }else if (idade < 50){
            //adulto
            img.innerHTML = '<img src="adulto-homem.png" alt="kid">'
        }else {
            //idoso
            img.innerHTML = '<img src="idoso-homem.png" alt="kid">'
        }
    }else if (sex[1].checked){
        gen = 'Mulher'
        if(idade >=0 && idade < 10){
            //kid
            img.innerHTML = '<img src="kid-mulher.png" alt="kid">'
        }else if (idade < 21){
            //jovem
            img.innerHTML = '<img src="jovem-mulher.png" alt="kid">'
        }else if (idade < 50){
            //adulto
            img.innerHTML = '<img src="adulto-mulher.png" alt="kid">'
        }else {
            //idoso
            img.innerHTML = '<img src="idoso-mulher.png" alt="kid">'
        }
    }
    res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
} 