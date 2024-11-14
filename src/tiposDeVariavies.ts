// string representa valores de string como "Hello, world"
const nome: string = "Jonatas";
// boolean é para os dois valores true e false
const ehVerdade: boolean = false;

// number é para números como 42. JavaScript/typescript não tem um valor de tempo de execução
// especial para inteiros, portanto, não há equivalente a int ou float tudo é simplesmente number
const idade: number = 0;

/**
 TypeScript também tem um tipo especial any, que você pode usar sempre que quiser que um 
 valor específico cause erros de verificação de tipo. Quando um valor é do 
 tipo any, você pode acessar qualquer propriedade dele (que por sua vez será do tipo any),
  chame-o como uma função, atribua-o a (ou de) um valor de qualquer tipo, 
  ou praticamente qualquer outra coisa que seja sintaticamente legal. O any 
  o tipo é útil quando você quer escrever um tipo longo apenas para convencer 
  o TypeScript de que uma determinada linha de código está bem.
 */
const naoSei: any = 0;
