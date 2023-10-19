// boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy or falsy
// 0 -> false
// 1 -> true

// == -> compara valor
console.log(0 == false)
console.log("" == false)
console.log(1 == true)

// === -> compara o valor e tipo
console.log(0 ===false)
console.log(""  ===  false)
console.log(1 === true)

// null -> Vazio ou nada
// undefined -> Não foi definido

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3 ;
let texto = "Alura";

// typeof -> Para perguntar ao javascript,  
//  qual é o tipo de dado que esta sendo guardado na variável

console.log(typeof numero);
console.log(typeof texto);

console.log(typeof minhaVar);
console.log(typeof varNull);