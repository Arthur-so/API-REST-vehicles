# API de Cadastro de Veículos

Esta é uma API JSON RESTful que permite o cadastro, atualização, exclusão e consulta de veículos. A API oferece endpoints para manipular os veículos, obter informações sobre a base de veículos e realizar filtros.

A API foi construída usando [Node.js](https://nodejs.org) e [Express.js](https://expressjs.com) como framework web. Os dados são armazenados em memória, sem persistência em um banco de dados.

## Requisitos

- Node.js (v12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação e inicialização

1. Clone este repositório para o seu ambiente local.
2. Navegue até o diretório do projeto.
3. Execute o seguinte comando para instalar as dependências:

	```
	npm install
	```
4. Inicie o servidor
	```
	node index.js
	```

	O servidor será iniciado na porta 3000.

## Endpoints

A API oferece os seguintes endpoints:

- `GET /veiculos`: Retorna todos os veículos cadastrados.
- `GET /veiculos/find?q=termo`: Retorna os veículos que correspondem ao termo de busca.
- `GET /veiculos/:id`: Retorna os detalhes de um veículo específico.
- `POST /veiculos`: Adiciona um novo veículo.
- `PUT /veiculos/:id`: Atualiza os dados de um veículo específico.
- `PATCH /veiculos/:id`: Atualiza parcialmente os dados de um veículo específico.
- `DELETE /veiculos/:id`: Exclui um veículo específico.

## Estrutura dos Dados

A API utiliza a seguinte estrutura para representar um veículo:

- `id` (number): O identificador único do veículo.
- `veiculo` (string): O nome do veículo.
- `marca` (string): A marca do veículo.
- `ano` (number): O ano de fabricação do veículo.
- `descricao` (string): Uma descrição detalhada do veículo.
- `vendido` (boolean): Indica se o veículo está vendido ou não.
- `created` (string): A data e hora de criação do veículo (no formato ISO 8601).
- `updated` (string): A data e hora da última atualização do veículo (no formato ISO 8601).

Exemplo de um objeto de veículo:

```json
{
  "id": 1,
  "veiculo": "Gol",
  "marca": "Volkswagen",
  "ano": 2010,
  "descricao": "Um carro compacto e econômico.",
  "vendido": false,
  "created": "2023-07-01T10:30:00Z",
  "updated": "2023-07-01T10:30:00Z"
}
```

##  Autor 
- Nome: Arthur Santos de Oliveira
- E-mail: arthursantos.oliveira001@gmail.com
- LinkedIn: https://www.linkedin.com/in/arthur-santos-de-oliveira-001/