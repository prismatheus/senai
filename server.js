// se tiver muito esquisito é pq foi bem dificil pra eu entender tbm, vou tentar explicar melhor como funciona o codigo na aula

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

//CORS
app.use(
  cors({
    origin: "*",
  })
);


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

// Rota para buscar todos os usuários e seus veículos
app.get('/usuarios-veiculos', (req, res) => {
  const query = `
    SELECT USUARIO.NOME, USUARIO.CPF, VEICULO.PLACA
    FROM USUARIO
    LEFT JOIN VEICULO ON USUARIO.ID_USUARIO = VEICULO.USUARIO_ID_USUARIO
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro ao buscar dados do banco.');
      return;
    }
    res.json(results);
  });
});

// Rota para pesquisar veículo por placa
app.get('/pesquisar-veiculo', (req, res) => {
  const placa = req.query.placa;
  if (!placa) {
    return res.status(400).json({ found: false });
  }

  const query = 'SELECT * FROM VEICULO WHERE PLACA = ?';
  connection.query(query, [placa], (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return res.status(500).json({ found: false });
    }

    // Verifica se a placa foi encontrada
    const found = results.length > 0;
    res.json({ found });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});