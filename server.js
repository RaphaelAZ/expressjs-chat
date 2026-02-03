const http = require('http');
const app = require('./app');
require('dotenv').config();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.on('error', (error) => {
  console.error('Erreur du serveur :', error);
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`Serveur : ${PORT}`);
});