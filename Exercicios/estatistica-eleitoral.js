class EstatisticaEleitoral {

  constructor(totalEleitores, votosValidos, votosBrancos, votosNulos) {
    this.totalEleitores = totalEleitores;
    this.votosValidos = votosValidos;
    this.votosBrancos = votosBrancos;
    this.votosNulos = votosNulos;
  }
  
  percentualVotosValidos() {
    return (this.votosValidos / this.totalEleitores) * 100;
  }

  percentualVotosBrancos() {
    return (this.votosBrancos / this.totalEleitores) * 100;
  }

  percentualVotosNulos() {
    return (this.votosNulos / this.totalEleitores) * 100;
  }
}
  
// Dados fornecidos
const totalEleitores = 1000;
const votosValidos = 800;
const votosBrancos = 150;
const votosNulos = 50;

const estatisticaEleitoral = new EstatisticaEleitoral(totalEleitores, votosValidos, votosBrancos, votosNulos);

console.log(`O percentual do votos válidos em relação ao total de eleitores é ${estatisticaEleitoral.percentualVotosValidos()}%`);
console.log(`O percentual de brancos em relação ao total de eleitores é ${estatisticaEleitoral.percentualVotosBrancos()}%`);
console.log(`O percentual de nulos em relação ao total de eleitores é ${estatisticaEleitoral.percentualVotosNulos()}%`);
  