import cipher from './cipher.js';
const mensagem = document.getElementById("mensagem")
const deslocamento = document.getElementById("deslocamento")
const btnCodificar = document.getElementById("codificar")
const btnDecodificar = document.getElementById("decodificar")
btnCodificar.addEventListener("click", function () {
    const texto = mensagem.value
    const offset = deslocamento.value
    const offsetFormat = parseInt(offset)
    cipher.encode(offsetFormat,texto)
    let resultado = cipher.encode(offsetFormat, texto)
 if (texto=="") {
    return alert("Escreva a sua mensagem!")}
 else document.getElementById("resultado").innerHTML=resultado;
 
})



btnDecodificar.addEventListener("click", function () {
    const texto = mensagem.value
    const offset = deslocamento.value
    const offsetFormat = parseInt(offset)
    cipher.decode(offsetFormat,texto)
    let resultadoDec = cipher.decode(offsetFormat, texto)
    if (texto == "") {
        return alert("Escreva a sua mensagem!")
    }
    else document.getElementById("resultado").innerHTML=resultadoDec;
}
)
