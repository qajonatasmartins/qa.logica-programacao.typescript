/**
 * const: (constante)
 * Uma variável declarada com const não pode ser reatribuída após ser inicializada,
 * ou seja, você não pode mudar o valor dela. No entanto, se a variável
 * for um objeto ou array, você pode alterar suas propriedades ou elementos
 * (mas não pode reatribuir a variável para outro valor).
 // const pessoa = { nome: "jonatas", idade: 18 };
// pessoa.idade = 15;

// const pessoaArray = ["jonatas", "bruno"];
// pessoaArray[0] = "bruna";
// console.log(pessoaArray);
 * 
 * 
 * var: (antigo e menos recomendado)
 * 
 * 
 * let: (mais moderno e recomendado)
let nome = "Jonatas";
console.log("fora escopo", nome);

function falarNome() {
  nome = "bruna";
  console.log("falar nome", nome);
}

console.log("fora escopo 2", nome);

falarNome(); 

 * O let tem um escopo de bloco. Ou seja, ele só está 
 * disponível dentro do bloco de código em que foi definido (dentro de {}).
 */

/*
Resumo:
var: Tem escopo de função, e pode causar comportamentos inesperados devido ao "hoisting". Não é mais recomendado para o código moderno.

let: Tem escopo de bloco, ou seja, só vale dentro de {}. Usado para quando você precisa de uma variável cujo valor pode mudar.

const: Também tem escopo de bloco, mas a variável não pode ser reatribuída após sua declaração. Usado para valores que não mudam.

*/

function exemploVar() {
  var numero = 10;
  if (true) {
    var numero = 20; // redeclara a variável
    console.log(numero); // Exibe: 20
  }
  var numero = 13;
  console.log(numero); // Exibe: 13

  var numero = 12;
  console.log(numero); // Exibe: 12
}

exemploVar();
