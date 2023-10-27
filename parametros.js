// Parâmetros de função

             // 2     ,   2
function soma(numero1, numero2){
    return numero1 + numero2
}
console.log(soma(2,  2))
console.log(soma(-2,  225))

// parâmetros x argumentos

//  ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} tenho ${idade} anos`
}
console.log(nomeIdade("Iran", 30))

//função dentro de outra
function multiplica(numero1, numero2){
    return  numero1 * numero2
}
console.log(multiplica(soma(4, 5), soma(3, 3)))

//  outro modelo 

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2
}
console.log(multiplica(soma(4, 5)))