// --- Registro das Despesas ---

let despesas = {}; // Objeto para armazenar as despesas

console.log("--- Registro de despesas pessoais ---");
console.log("Por favor, informe o valor para cada categoria. Digite 0 se não houver despesa nesta categoria");

// Solicita o valor para cada categoria de despesa
despesas.moradia = parseFloat(prompt("Valor da moradia (aluguel/prestação): R$"));
despesas.alimentacao = parseFloat(prompt("Valor da alimentação (supermercado/feira): R$"));
despesas.transporte = parseFloat(prompt("Valor do transporte (combustível/público): R$"));
despesas.lazer = parseFloat(prompt("Valor do lazer (passeios/cinema): R$"));
despesas.contas = parseFloat(prompt("Valor das contas (luz, água, internet, telefone): R$"));
despesas.educacao = parseFloat(prompt("Valor da educação (mensalidade/cursos): R$"));

// Exibe despesas registradas
console.log("\n--- Despesas Registradas ---");
for (const categoria in despesas) {
    // Verifica se o valor é um número válido antes de exibir
    if (!isNaN(despesas[categoria]) && despesas[categoria] >= 0) {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$ ${despesas[categoria].toFixed(2)}`);
    } else {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: Valor inválido.`);
        despesas[categoria] = 0; // Define como 0 para não afetar o cálculo
    }
}

// --- Cálculo do Total de Despesas ---
let totalDespesas = 0;
let numeroDeCategoriasComDespesa = 0;

for (const categoria in despesas) {
    if (!isNaN(despesas[categoria]) && despesas[categoria] > 0) {
        totalDespesas += despesas[categoria];
        numeroDeCategoriasComDespesa++;
    }
}

console.log(`\nTotal de Despesas: R$ ${totalDespesas.toFixed(2)}`);

// --- Cálculo da Média de Despesas ---
let mediaDespesas = 0;
if (numeroDeCategoriasComDespesa > 0) {
    mediaDespesas = totalDespesas / numeroDeCategoriasComDespesa;
    console.log(`Média de despesas por categoria com gasto: R$ ${mediaDespesas.toFixed(2)}`);
} else {
    console.log("Nenhuma despesa registrada para calcular a média.");
}

console.log("-------------------");

// --- Comentário sobre `isNaN` ---
// A função `isNaN()` (is not a number) é utilizada para verificar se um valor NÃO é um número válido.
// No código, ela é usada após a conversão de um valor inserido pelo usuário para um número (`parseFloat`).
// Se o usuário digitar algo que não possa ser convertido em número (como texto sem sentido), `parseFloat` retornará `NaN`.
// Nesse caso, `isNaN()` retornará `true`, indicando que o valor é inválido e será tratado como 0.

