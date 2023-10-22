// concatenação  

const nome = "Iran";
const idade = 31;
const cidadeDeNascimento = "São Paulo";

//const apresentacao = "Meu nome é:"  + nome;

//console.log(apresentacao);

                           //template string

// 01- trocar as aspas por um acento grave (`)
// 02 - adicionar as variaveis (${nome})

const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;
console.log(apresentacao);