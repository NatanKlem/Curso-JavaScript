function carregar(){
    var msg = document.querySelector('div#msg')
    var imagem = document.querySelector('div#img')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = (`Agora são ${hora} horas`)
    if (hora < 12){ 
        imagem.innerHTML = '<img src="manha.png" alt=""></img>'
        document.body.style.background = '#e2cd9f'
    } else if (hora <= 18){
        imagem.innerHTML = '<img src="tarde.png" alt=""></img>'
        document.body.style.background = '#b9846f'
    } else {
        imagem.innerHTML = '<img src="noite.png" alt=""></img>'
        document.body.style.background = '#515154'
    }
}