// Exercio


//Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

const valorNull = null;
let valorUndefined;

console.log('Valor de valorNull:', valorNull); // Saída: null
console.log('Valor de valorUndefined:', valorUndefined); // Saída: undefined

// Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase em constras maiúsculas.

const frase = 'Esta é uma frase de exemplo.';
console.log(frase.length); // Comprimento da frase
console.log(frase.toUpperCase()); // Frase em constras maiúsculas

//Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número.
// Exiba os tipos de dados resultantes no console.

const number = 1;
const string = '1';

const convertedNumber = String(number);
const convertedString = Number(string);

console.log( typeof convertedNumber )
console.log( typeof convertedString )

//Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, 
// para modificar a string original. Exiba os resultados finais no console.

const myName = 'Gabriel Valim';
const nameUpperCase = myName.toUpperCase();
const nameLowerCase = myName.toLowerCase();
const nameSlice = myName.slice(0, 7);

console.log('Nome em maiúsculas:', nameUpperCase);
console.log('Nome em minúsculas:', nameLowerCase);
console.log('Parte do nome:', nameSlice);


//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean)
// em uma única string e exiba o resultado no console.

const numero = 42;
const texto = ' é a resposta.';
const booleano = true;

const combinacao = `${numero} ${texto} É verdade? ${booleano}`;
console.log(combinacao);