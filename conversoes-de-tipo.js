// Tipo de dado
// Booleanos

//conversão implicita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString);
console.log(numero == numeroString);

//concatenação
console.log(numero+numeroString);


//Conversão Explícita

//Number()
//String()

// const numero = 456;
// const numeroString = Number("456");
//console.log(numero+numeroString);

console.log(numero+Number(numeroString));
console.log(String(numero)+numeroString);

let usuarioconectado = false;

console.log(String(usuarioconectado));
// False -> 0
usuarioconectado  = true;
console.log(String(usuarioconectado));
// True -> 1