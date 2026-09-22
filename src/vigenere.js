//subtraimos valor da letra em relação ao valor de A para termos número que representa a posição exata dequela letra no alfabeto. Numero dentro do parenteses indica o indice em que da string que queremos consultar
function letraParaNumero (letra) {
    const numero = letra.toUpperCase().charCodeAt(0) - "A".charCodeAt(0)
    return numero
}

console.log(letraParaNumero("a"))

// Utilizamos um  método que "fabrica" uma string a partir de um código numérico (que esta no parenteses).  

// Soma 65 porque para nós o alfabeto começa em 0, mas na tabela real do computador o 'A' vale 65. Aí utilizamos uma lógica de soma. 0 + 65 = 65; 2 + 65 = 67.(equivale extamente a C) 
function numeroParaLetra (numero){
    const letra = String.fromCharCode(numero + "A".charCodeAt(0))
    return letra 
}

console.log(numeroParaLetra(0))
