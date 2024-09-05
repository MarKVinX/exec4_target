// Faturamento mensal detalhado por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o percentual de cada estado
function calcularPercentuais(faturamentoPorEstado) {
    const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
    const percentuais = {};

    // Calcula o percentual de cada estado com base no faturamento total
    for (const estado in faturamentoPorEstado) {
        percentuais[estado] = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
    }

    return percentuais;
}

// Chama a função e obtém os percentuais
const percentuaisPorEstado = calcularPercentuais(faturamentoPorEstado);

// Exibe os percentuais de cada estado
for (const estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado].toFixed(2)}%`);
}