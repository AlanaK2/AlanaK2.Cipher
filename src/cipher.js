    
/*const cipher = function cipherEncode(texto,offset)
{return ((texto.charCodeAt()-65+offset) % 26) + 65}
*/

 const cipher = {encode: function(texto, offset){
    return ((texto.charCodeAt()-65+offset)% 26)+65
    let resultado= encode(texto, offset)
    alert(resultado)
 }
    
}
newText = (texto.fromCharCode(resultado))
alert(newText)

export default cipher;

/*function letraCorrespondente (resultado){
    return (resultado)
}


{

};

// ...

/*function cipher.encode(valor,frase)
let valor= document.querySelector('input [name="deslocamento"]:checked').value
let frase= document.querySelector('textarea [name="texto"]:checked').value
let ascii= frase.charCodeAt(frase)
*/

