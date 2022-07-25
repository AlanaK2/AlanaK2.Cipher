     const cipher = {encode, decode}
    
 function encode(texto, offsetFormat) {     
     let resultado= ""
             for (let i = 0; i < texto.length; i++){
                let code= ((texto.charCodeAt(i)-65+offsetFormat)%26)+65
            let newText= String.fromCharCode(code)
            resultado+=newText            
            
        }    
        return resultado       
    }
    function decode (texto, offsetFormat){
        let resultadoDec=""
        for (let i = 0; i < texto.length; i++){
            let dec= ((texto.charCodeAt(i)-65-offsetFormat)%26)+65
            let newTextDec= String.fromCharCode(dec)
           resultadoDec+=newTextDec
        }
    return resultadoDec
        }    
     
      export default cipher;
      

