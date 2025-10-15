var idade = 50
if (idade < 16){
    console.log(`Você tem ${idade} anos,e ainda não tem idade para tirar um título.`)
} else if (idade < 18 || idade > 64) {
    console.log(`Você tem ${idade} anos, e o seu voto é opcional.`)
} else {
    console.log(`Você tem ${idade} anos, é obrigatorio.`)
}