const inpuTextArea = document.querySelector('.inPutText');
const outpuTextArea = document.querySelector('.outPutText');

function btnEncriptar() {
    const textoEncriptado = encriptar(inpuTextArea.value);
    outpuTextArea.value = textoEncriptado;
    inpuTextArea.value = "";
    outpuTextArea.style.backgroundImage = "none";
}

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

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inpuTextArea.value);
    outpuTextArea.value = textoDesencriptado;
    inpuTextArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let arrayCode = [["e", "enter"],["i", "imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < arrayCode.length; i++) {
        if(stringDesencriptada.includes(arrayCode[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(arrayCode[i][1], arrayCode[i][0]);
        }
    }
    return stringDesencriptada;
}