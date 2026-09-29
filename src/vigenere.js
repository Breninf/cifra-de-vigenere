const readline = require('readline')

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

function descriptografarLetra(letra, chave){
    const numLetra = letraParaNumero(letra)
    const numChave = letraParaNumero(chave)

    const sub = (numLetra - numChave + 26) % 26

    return numeroParaLetra(sub)

}

function criptografar(mensagem, chave) {
    let resultado = ""

    for (let i = 0; i < mensagem.length; i++) {
        const letraMensagem = mensagem[i];
        const letraChave = chave[i % chave.length] 

        const letraCriptografada = criptografarLetra(letraMensagem, letraChave)

        resultado = resultado + letraCriptografada
        
    }

     return resultado //retorna a mensagem totalmente cifrada
}

function descriptografar(mensagemCripto, chave) {
    let mensagemDescripto = ""

    for (let i = 0; i < mensagemCripto.length; i ++) {       
        const letraCripto = mensagemCripto[i]
        const letraChave = chave[i % chave.length]

        const letraDescriptografada = descriptografarLetra (letraCripto, letraChave)

        mensagemDescripto = mensagemDescripto + letraDescriptografada
    }

    return mensagemDescripto

}

const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite uma mensagem: ', (mensagem) => {


    rl.question('Digite uma chave: ', (chave) => {
        
        console.log(criptografar(mensagem, chave))

        rl.close();
    })
 
})
