/* Tipos de Laços no JS

"do / while"

*/

let counter = 10;
do {
    console.log(counter++);
} while (counter < 10);

/* 

"laço for in"

*/

let car = {
    brand: 'VW',
    model: 'Gol',
    year: 2013
}

for (let prop in car) {
    console.log(`${car[prop]}`);
}

/**  Objetos: 
 * – Objsetos são Mutáveis;
 * – São manipulados por referência;
 * Ex.:
*/

/** let obj = {
    prop1: 'prop1',
    prop2: 'prop2',
}
console.log(obj);

let objCopy = obj;
console.log(objCopy);

/** Criando Objetos:
 * - Litearais;
 * - Como construtor (new);
 * - Com "Object.create()"
 */

let objLiteral = { prop1: 'propriedade1', prop2: 'propriedade2' } // Objeto Literal
let newObj = new Object(); /* Usando o construtor (new) 
newObj retorna o objeto. */

// let obj2 = Object.create(); // Criando com "Object.create() ATENÇÃO: as vezes dá erro em prototype

/** Herança no JS 
 - Object.create() */

let obj = { x: 1, y: 2 };
let obj2 = Object.create(obj);


/** Adicionar ou Remover
 * Métodos de Array */

// .push()  adiciona no final do array;
// .pop()   remove do final do array;
// .join()  junta em string itens do array, aceita por parametros sinals ou espaço;
// .reverse()   inverte a ordem dos arrays, do ultimo para o primeiro e mantém o array como efeito colateral;
// .sort()  ordernar por ordem alfabetica e mantém o array como efeito colateral;

// JSON.stringify();    converte objetos em string;
// JSON.parse();    converte o acima em objeto;

/** toString(); converte e retorna arrays em string e separa por vírgulas, mas não modifica o array;
 * concat();    gera um novo array com os novos valores passados por parametros , mas não modifica o array;
 * unshift();   adiciona no começo do array;
 * shift();     remove oprimeiro item do array;
 * 
 * slice();     retorna parte do array passado por paramentro;
 * splice();    modifica o array removendo ou adicionando itens no array; (passar por parametro(indice, qtdRemover));
 * 
 * forEach();   estrutura de repetição elegante e funcional para 
 * every();     sempre retorna "true" ou "false" se baseando nos parametros aplicados;
 * some();      retorna true ou false se apenas um método for aplicado
 * 
 * map();       retorn o array modificado mas não altera o original
 * filter();    
*/ 