function letraParaNumero(letra) {
    const numero = letra.toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
    return numero
}

function numeroParaLetra(numero){
    const letra = String.fromCharCode(numero + "A".charCodeAt(0))
    return letra 
}

function criptografarLetra(letra, chave) {
    const numLetra = letraParaNumero(letra)
    const numChave = letraParaNumero(chave)

    const soma = (numChave + numLetra) % 26

    return numeroParaLetra(soma)
}

function criptografar(mensagem, chave) {
    let resultado = ""

    for (let i = 0; i < mensagem.length; i++) {
        const letraMensagem = mensagem[i];

        const letraChave = chave[i % chave.length] //quando a chave é menor que a mensagem, ela é reutilizada desde o índice inicial enquanto ainda houver letras da mensagem para criptografar.
        const letraCriptografada = criptografarLetra(letraMensagem, letraChave)

        resultado = resultado + letraCriptografada
        
    }

     return resultado //retorna a mensagem totlmente cifrada
}

const testOne = criptografar("ATAQUE", "SENHA")

console.log(testOne)


