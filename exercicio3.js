// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois
//  realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, 
// considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldo = 1000;
const saque = 50;
const deposito = 500;
const operacao = saldo - saque;

console.log('Saldo:', saldo); 
console.log('Saldo após saque:', operacao);

// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

const number = 10;
const operadorTernario = number % 2 === 0 ? 'par' : 'impar';
console.log(operadorTernario);

// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de 
// administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e

const logado = true;
const admin = false;

const resultado = logado && admin;

console.log('Administrador logado no sistema:', resultado); 


// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

const condicao1 = true;
const condicao2 = false;

const saida = condicao1 || condicao2;

console.log('Resultado do operador OR:', resultado); // Saída: true

// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a
// idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

const userAge = 10;
const MinimumAge = 18;

if(userAge >= MinimumAge) {
    console.log('Tem idade suficente')
} else {
    console.log('Menor de idade');
}