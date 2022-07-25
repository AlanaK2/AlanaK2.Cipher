import cipher from './cipher.js';
const mensagem= document.getElementById("mensagem")
const deslocamento= document.getElementById("deslocamento")
const btnCodificar= document.getElementById("codificar")
const btnDecodificar= document.getElementById("decodificar")
btnCodificar.addEventListener("click", function(){
    const texto= mensagem.value
    const offset= deslocamento.value
    const offsetFormat= parseInt(offset)
 cipher.encode(texto,offsetFormat)
 let resultado= cipher.encode(texto,offsetFormat)
 if (texto=="") {
    return alert("Escreva a sua mensagem!")}
 else {alert (resultado)};
 })



btnDecodificar.addEventListener("click", function(){
    const texto= mensagem.value
    const offset= deslocamento.value
    const offsetFormat= parseInt(offset)
    cipher.decode(texto,offsetFormat)
    let resultadoDec= cipher.decode(texto,offsetFormat)
    if (texto=="") {
        return alert("Escreva a sua mensagem!")}
     else {alert (resultadoDec)};    
}
    )
