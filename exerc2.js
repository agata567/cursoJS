// Lista de ingredientes do bolo (array)
const ingredientes = [
    "3 ovos",
    "2 xícaras de farinha de trigo",
    "1 xícara de açúcar",
    "1/2 xícara de óleo",
    "1 xícara de leite",
    "1 colher de sopa de fermento em pó"
];

// Exibindo o título da receita
console.log("🍰 Receita de Bolo Simples");
console.log("Ingredientes:");

// Exibindo cada ingrediente com numeração
ingredientes.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
});
