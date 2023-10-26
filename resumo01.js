const nome = "Léo"
const idade = 20
const bebidaMaior = "Cerveja"
const bebidaMenor = "Suco"
const maiorIdade = 18
const espaço = ""

// condição 01 - operador ternãrio
const pedido =  `${nome} diz: por favor, quero beber ${idade >= maiorIdade ? bebidaMaior : bebidaMenor}`
console.log(pedido)

// espaço entre linhas
console.log(espaço)

// condição 02 
if (idade >= maiorIdade) {
    console.log("Olá, " + nome + " Voçê é maior de idade pode beber " + bebidaMaior +  "!")
} else { 
    console.log("Olá, " + nome + " Voçê é menor de idade pode beber " + bebidaMenor +  "!")
}