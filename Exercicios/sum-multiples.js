function PASum(a1, an, n) {
    return (an + 1) * an  
}

function sumMultiplesThreeFive(X) {

    // Sabe-se, pela soma de PA, que : soma = (firstMultiple * numMultiples * (numMultiples + 1)) / 2;
    const sumArithmeticSerie = (firstMultiple) => {
        const numMultiples = Math.floor((X - 1) / firstMultiple);
        return (firstMultiple * numMultiples * (numMultiples + 1)) / 2;
    };

    // Soma dos multiploes de 3 e 5
    const sum3 = sumArithmeticSerie(3);
    const sum5 = sumArithmeticSerie(5);

    // Soma dos multiplos da interceção de 3 e 5
    const sum15 = sumArithmeticSerie(15);

    // Soma os multiplos e retira os múltiplos comuns a 3 e 5
    const totalSum = sum3 + sum5 - sum15;

    return totalSum;
}

// Exemplo
const X = 10;
const sum = sumMultiplesThreeFive(X);
console.log(`A soma dos multiplos de 3 ou 5 até ${X} é ${sum}.`);
