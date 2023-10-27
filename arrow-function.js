// Arrow  Function -  CONSOLE.LOG SEMPRE FICA NA ORDEM DA FUNÇÃO 
const apresentarArrow = nome => `Meu nome é: ${nome}`
console.log(apresentarArrow("Alessandra")) // FUNÇÃO ACIMA
const soma = (num1, num2) => num1 + num2
console.log(soma(4,6)) //FUNÇÃO ACIMA 

// Arrow  Function -  CONSOLE DESSA FORMA ABAIXO NAO IRÁ FUNCIONAR
// const apresentarArrow = nome => `Meu nome é: ${nome}`
// const soma = (num1, num2) => num1 + num2
// console.log(apresentarArrow("Alessandra")) 
// console.log(soma(4,6)) 


// Arrow function - quanto tiver mais de uma linha de instrução, vai precisar usar chaves e return 
// Exemplo com + de 1 linha de instrução 
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "Somente números de 1 a 10"
    } else {
        return num1 + num2
    }
}
console.log(somaNumerosPequenos(10, 9))

// Hoisting: arrow function se comporta como expressão