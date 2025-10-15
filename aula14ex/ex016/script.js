// pegando informações do HTML
function contar() {
    let inicio = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let res = document.getElementById("res")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("ERROR - faltam dados para ser inseridos.");
    } else {
        res.innerHTML = "Contando... <br>"
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert("Passo Invalido! Considerando PASSO 1");
            p = 1;
        }
        if (i < f) {
            for (let contador = i; contador <= f; contador += p) {
                res.innerHTML += `${contador} \u{1F449}`;
            }

        } else {
            for (let contador = i; contador >= f; contador -= p) {
                res.innerHTML += `${contador} \u{1F449}`;

            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}

