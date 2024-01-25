//Exercicio 

// 1- Declare três variáveis diferentes 
// (uma para cada tipo: string, número e booleano)
//  e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

console.log('---------------')

console.log("EXERCICO - 1")

const number = 1;
const string = 'Gabriel';
const boolean = true;

console.log(typeof(number), typeof(string), typeof(boolean));

console.log('---------------')

// Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida,
// combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. 
// Por fim, imprima os resultados obtidos no console.

console.log("EXERCICO - 2")

const firstName = 'Gabriel';
const lastName = 'Valim';
const fullName = firstName + lastName 
const fullNameTS = `Meu nome é: ${firstName} ${lastName}`;

console.log(fullName, fullNameTS);

console.log('---------------')

// Declare duas variáveis, uma contendo um número e outra contendo uma string.
// Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

console.log("EXERCICO - 3")

const age = 22;
const name = 'Gabriel Valim';
const text = `Meu nome é: ${name} e eu tenho ${age}`;

console.log(text);

console.log('---------------')

// Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. 
// Imprima ambos os valores no console após atribuí-los.

console.log("EXERCICO - 4")

let typeNumber = 1;
console.log(typeof(typeNumber));
typeNumber = '1';
console.log(typeof(typeNumber));

console.log('---------------')

// Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. 
// Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. 
// Faça o mesmo processo utilizando let e compare com os resultados anteriores.

console.log("EXERCICO - 5")

var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////

// let fora = 'Fora do bloco';

// if (true) {
//     let dentro = 'Dentro do bloco';
//     console.log(fora); // retorna 'Fora do bloco'
//     console.log(dentro); // retorna 'Dentro do bloco'
// }

// console.log(fora); // retorna 'Fora do bloco'
// // console.log(dentro); // erro 'dentro is not defined'

console.log('---------------');


// Declare uma variável booleana que informa se está chovendo e utilize-a
// em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

console.log("EXERCICO - 6") 

const raining = false;

if(raining === true) {
    console.log('Levar um guarda chuva!');
} else {
    console.log('Hojé fara sol!');
}