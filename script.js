const inpuTextArea = document.querySelector('.inPutText');
const outpuTextArea = document.querySelector('.outPutText');
function encriptar(stringEncriptada) {
    let arrayCode = [["e", "enter"],["i", "imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < arrayCode.length; i++) {
        if(stringEncriptada.includes(arrayCode[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(arrayCode[i][0], arrayCode[i][1]);
        }
    }
    return stringEncriptada;
}
function btnEncriptar() {
    const textoEncriptado = encriptar(inpuTextArea.value);
    outpuTextArea.value = textoEncriptado;
    outpuTextArea.style.backgroundImage = "none";
}
