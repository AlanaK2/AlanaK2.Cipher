import cipher from './cipher.js';
const mensagem= document.getElementById("mensagem")
const deslocamento= document.getElementById("deslocamento")
const btnCodificar= document.getElementById("codificar")
const btnDecodificar= document.getElementById("decodificar")
btnCodificar.addEventListener("click", function(){
    const texto= mensagem.value
    const offset= deslocamento.value
 cipher.encode(texto,offset)
})

btnDecodificar.addEventListener("click", function(){
    const texto= mensagem.value
    const offset= deslocamento.value

})


/*
codificar_element.addEventListener("click", code)= cipher.encode();
let decodificar_element= document.getElementById("decodificar")
decodificar_element.addEventListener("click", uncode)= cipher.decode()

function validaForm() {
    let questions = document.querySelector('textarea:checked').value;
    if (questions =="") {alert("Escreva sua mensagem!")}

}

console.log(cipher);
*/