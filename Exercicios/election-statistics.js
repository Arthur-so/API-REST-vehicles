class ElectionStatistics {
  constructor(totalVoters, validVotes, blankVotes, nullVotes) {
    this.totalVoters = totalVoters;
    this.validVotes = validVotes;
    this.blankVotes = blankVotes;
    this.nullVotes = nullVotes;
  }

  percentValidVotes() {
    return (this.validVotes / this.totalVoters) * 100;
  }

  percentBlankVotes() {
    return (this.blankVotes / this.totalVoters) * 100;
  }

  percentNullVotes() {
    return (this.nullVotes / this.totalVoters) * 100;
  }
}

// Dados fornecidos
const totalVoters = 1000;
const validVotes = 800;
const blankVotes = 150;
const nullVotes = 50;

const statistics = new ElectionStatistics(totalVoters, validVotes, blankVotes, nullVotes);

console.log(`O percentual do votos válidos em relação ao total de eleitores é ${statistics.percentValidVotes()}%`);
console.log(`O percentual de brancos em relação ao total de eleitores é ${statistics.percentBlankVotes()}%`);
console.log(`O percentual de nulos em relação ao total de eleitores é ${statistics.percentNullVotes()}%`);
  