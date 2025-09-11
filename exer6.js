// Simula a entrada de dados (você pode adaptar isso para usar módulos como 'readline-sync')
const notas = {
    primeiroBimestre: 7.5,
    segundoBimestre: 8.0,
    terceiroBimestre: 6.5,
    quartoBimestre: 9.0
};

function calcularMedia(notasBimestrais) {
    const somaNotas = notasBimestrais.primeiroBimestre +
                      notasBimestrais.segundoBimestre +
                      notasBimestrais.terceiroBimestre +
                      notasBimestrais.quartoBimestre;
    const media = somaNotas / 4;
    return media;
}

function exibirBoletim(notasAluno) {
    const mediaFinal = calcularMedia(notasAluno);

    console.log("--- Boletim Escolar ---");
    console.log("Notas:");
    console.log(` 1º Bimestre: ${notasAluno.primeiroBimestre}`);
    console.log(` 2º Bimestre: ${notasAluno.segundoBimestre}`);
    console.log(` 3º Bimestre: ${notasAluno.terceiroBimestre}`);
    console.log(` 4º Bimestre: ${notasAluno.quartoBimestre}`);
    console.log(`Média Final: ${mediaFinal.toFixed(2)}`);

    if (mediaFinal >= 7) {
        console.log("Situação: Aprovado ✅");
    } else if (mediaFinal >= 5) {
        console.log("Situação: Recuperação ⚠️");
    } else {
        console.log("Situação: Reprovado ❌");
    }
}

// Executa a função para exibir o boletim
exibirBoletim(notas);
