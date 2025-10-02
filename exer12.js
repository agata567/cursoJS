/*Criando um array
Crie um novo arquivo JavaScript e, dentro dele, elabore um exemplo simples de array. Seu código deve fazer o seguinte:
a) Declare uma variável usando const ou let para armazenar uma lista de elementos que você gosta. Podem ser seus filmes favoritos, time de futebol, ou qualquer outra coisa.
b) Adicione pelo menos 4 elementos à sua lista na declaração.
c) Acesse e imprima no terminal apenas o segundo elemento de sua lista.
d) Adicione um novo elemento ao final do seu array.
e) Imprima no terminal o array commpleto para confirmar se o novo item foi adicionado corretamente.
f) Após finalizar, execute seu código no Node.js e veja o resultado e chame seu professor. */

// a) Declarando uma variável para armazenar a lista de filmes favoritos
let filmesFavoritos = ['Através da Minha Janela', 'Homem Aranha', 'Mansão Pet', 'Velozes e Furiosos'];

// b) Já temos 4 elementos na lista: 'Através da Minha Janela', 'Homem Aranha', 'Mansão Pet', 'Velozes e Furiosos'

// c) Acessando e imprimindo o segundo elemento da lista
console.log(filmesFavoritos[1]); // 'Homem Aranha'

// d) Adicionando um novo elemento ao final do array
filmesFavoritos.push('The Através da Minha Janela Resurrections');

// e) Imprimindo o array completo para verificar se o novo item foi adicionado
console.log(filmesFavoritos);