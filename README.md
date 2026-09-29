# 🔐 Cifra de Vigenère

Implementação interativa da **Cifra de Vigenère** desenvolvida para a disciplina de **Segurança da Informação**, utilizando uma interface de linha de comando (CLI) dinâmica.

## 📚 Sobre a atividade

A atividade consiste em desenvolver um programa capaz de realizar:

* 🔒 **Encriptação** de mensagens utilizando a Cifra de Vigenère;
* 🔓 **Decriptação** de mensagens utilizando a chave correspondente.

A Cifra de Vigenère é uma técnica de criptografia polialfabética baseada na substituição de caracteres, utilizando uma **chave** dinâmica para determinar os deslocamentos das letras de forma a quebrar padrões repetitivos.

## 🧠 Engenharia por trás do código

Este projeto foi além da lógica matemática da cifra, servindo como laboratório prático para consolidar conceitos profundos de **Ciência da Computação** e do ecossistema do **Node.js**:

* **Gerenciamento de Memória de Baixo Nível (RAM):** Manipulação controlada de dados utilizando a **Stack** (para tipos primitivos e os ponteiros imutáveis travados por `const`) e a **Heap** (espaço dinâmico onde os objetos, arrays e módulos são instanciados).
* **Processamento Assíncrono e Streams (I/O):** Uso do módulo nativo `readline` integrado aos canos de comunicação do Sistema Operacional: `process.stdin` (fluxo de entrada focado no teclado) e `process.stdout` (fluxo de saída interativo focado na renderização em tempo real na tela).
* **Arquitetura Multi-Componente do Node.js:** Entendimento prático de como o **Motor V8** (interpretador JavaScript síncrono e single-thread) atua em conjunto com a **Libuv** (mecanismo assíncrono e multithread) através da orquestração e agendamento de *callbacks* gerenciados pelo **Event Loop**.

## ⚙️ Como funciona a Cifra

Para realizar a criptografia, cada letra é associada a um valor numérico:

```text
A = 0, B = 1, C = 2 ... Z = 25
```

A chave é repetida de forma modular através do operador de resto (`% chave.length`) para acompanhar perfeitamente o tamanho da mensagem.

A fórmula utilizada para a **encriptação** é:
```text
C = (M + K) % 26
```

Para realizar a **decriptação**, utiliza-se a operação inversa somando o intervalo alfabético para prevenir resultados negativos:
```text
M = (C - K + 26) % 26
```

## 📁 Estrutura do projeto

```text
cifra-vigenere/
├── src/
│   └── vigenere.js     # Contém as funções matemáticas e a CLI interativa
└── README.md           # Documentação completa do projeto
```

## 🛠️ Tecnologias

* **JavaScript** (Ecossistema ES6+)
* **Node.js** (Ambiente de execução de código)
* **Git & GitHub** (Versionamento e documentação)

## ▶️ Como Executar

Com o Node.js instalado em seu computador, abra o terminal na pasta raiz do projeto e execute o comando indicando o caminho correto da pasta `src`:

```bash
node src/vigenere.js
```

O programa iniciará um menu dinâmico no terminal perguntando se você deseja criptografar ou descriptografar, gerenciando o ciclo de vida da interface de leitura e encerrando o processo de forma limpa na memória após o resultado final.
