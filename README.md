# API JogoDaVelha
A API foi desenvolvida utilizando Node.js e Express.js por Rafaela Moreira para ser consumida por um jogo multiplayer de Jogo da Velha.

### O código
Consiste em duas rotas *POST* principais (*newGame* e *newMovement*) e uma única rota *GET* somente para abrir a página principal da aplicação. A persistência dos dados é feita *in-memory* e são armazenados em 2 vetores (*games* e *movements*), cada objeto é criado por sua respectiva função *new*, sendo que durante essa criação outras funções são chamadas para validações: partida existente, jogador correto em um determinado turno e jogada única para cada partida. Cada uma dessas funções foi separada por arquivos diferentes na pasta /Public/JavaScripts.

### Build
Para dar build, é necessário ter o Node.js e o NPM previamente instalado. Após clonar o repositório, abra o prompt de comando na pasta e digite "npm run build".
