// pegando informações do HTML
function contar() {
    let inicio = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("ERROR - faltam dados para ser inseridos.");
    } else {
        res.innerHTML = "Contando..."
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        for (let contador = i; contador <= f; contador += p) {
            res.innerHTML += `${contador} \u{1F449}`
        }
    }
}

