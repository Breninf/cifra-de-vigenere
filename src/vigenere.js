function letraParaNumero (letra) {
    const numero = letra.toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
    return numero
}

function numeroParaLetra (numero){
    const letra = String.fromCharCode(numero + "A".charCodeAt(0))
    return letra 
}

// O % 26 (resto da divisão) garante que o alfabeto "dê a volta". OBS: RESTO DE DIVISÃO INTEIRA
function criptografarLetra(letra, chave) {
    const numLetra = letraParaNumero(letra)
    const numChave = letraParaNumero(chave)

    const soma = (numChave + numLetra) % 26

    return numeroParaLetra(soma)
}

console.log(criptografarLetra("B", "C"))


console.log(criptografarLetra("Y", "D"))


console.log(criptografarLetra("Z", "Z"))



