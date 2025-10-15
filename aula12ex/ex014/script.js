function carregar() {
    var msg = window.document.getElementById(`msg`);
    var img = window.document.getElementById(`imagem`);
    var data = new Date();
    // var horas = data.getHours();
    var horas = 20

    msg.innerHTML = `Agora são ${horas} horas .`
    if (horas >= 0 && horas < 12 ) {
        img.src = `fotoManha.png`
        window.document.body.style.background = `#a08e7f`
    } 
    else if (horas >= 12 && horas <= 18) {
        img.src = `fotoTarde.png`
        window.document.body.style.background = `#346392`
    }
    else {
        img.src = `fotoNoite.png`
        window.document.body.style.background = `#493751`
    }
}


