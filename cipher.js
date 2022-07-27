const cipher = { encode, decode }

function encode(offsetFormat,texto) {
    if (typeof offsetFormat != "number") {
        throw TypeError()
    }
    if (typeof texto != "string"){
        throw TypeError()
    }
    let resultado = ""
    for (let i = 0; i < texto.length; i++) {
        let code = ((texto.charCodeAt(i) - 65 + offsetFormat) % 26) + 65
        let newText = String.fromCharCode(code)
        resultado += newText
    }
     return resultado
    
}
function decode(offsetFormat,texto) {
    if (typeof offsetFormat != "number"){
        throw TypeError()
    }
    if (typeof texto != "string"){
        throw TypeError()
    }
    let resultadoDec = ""
    for (let i = 0; i < texto.length; i++) {
        let dec = ((texto.charCodeAt(i) - 90 - offsetFormat) % 26) + 90
        let newTextDec = String.fromCharCode(dec)
        resultadoDec += newTextDec
    }
    return resultadoDec
}

export default cipher;


