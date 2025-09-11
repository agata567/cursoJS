// Registro das Despesas

let moradia = 1200;         // Valor do aluguel/prestação da casa
let alimentacao = 850;     // Gasto com supermercado e feira
let transporte = 300;      // Combustível, transporte público, etc.
let lazer = 450;           // Passeios, cinema, etc.
let contas = 600;           // Água, energia, internet, telefone
let educacao = 200;        // Mensalidade escolar, cursos

console.log("Despesas Familiares Registradas:");
console.log("Moradia: R$ " + moradia);
console.log("Alimentação: R$ " + alimentacao);
console.log("Transporte: R$ " + transporte);
console.log("Lazer: R$ " + lazer);
console.log("Contas: R$ " + contas);
console.log("Educação: R$ " + educacao);

// Cálculo Total de Despesas

let totalDespesas = moradia + alimentacao + transporte + lazer + contas + educacao;

console.log("Total de Despesas: R$" + totalDespesas );

// Calculo da Média de Despesas

// Para calcular a média, precisamos saber quantas "categorias" de despesas temos.
// Neste exemplo, temos 6 categorias.
let numeroDeCategorias = 6;
let mediaDespesas = totalDespesas / numeroDeCategorias;

console.log(`Média de Despesas por Categoria: R$ ${mediaDespesas.toFixed(2)}`); // .toFixed(2) formata para 2 casas decimais

