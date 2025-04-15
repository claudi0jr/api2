const express = require("express");
const app = express();
const port = 3000;

// meu banco
const usuarios = [
  { nome: "Breno Lima", cidade: "São Paulo" },
  { nome: "Claudio Crispim", cidade: "Rio de Janeiro" },
  { nome: "Natalia Araujo", cidade: "Belo Horizonte" },
  { nome: "Matheus Barbosa", cidade: "São Paulo" },
  { nome: "Francis Sobreira", cidade: "Porto Alegre" },
  { nome: "Harley", cidade: "Curitiba" },
  { nome: "Yuri", cidade: "Rio de Janeiro" },
  { nome: "Isaac", cidade: "Salvador" },
  { nome: "Bonny", cidade: "Fortaleza" },
  { nome: "Talles", cidade: "Rio de Janeiro" },
];

app.get("/usuario/todos", (req, res) => {
  res.json(usuarios);
});

app.get("/usuario/cidade/:cidade", (req, res) => {
  const cidade = req.params.cidade;
  const usuariosFiltrados = usuarios.filter(
    (usuario) => usuario.cidade.toLowerCase() === cidade.toLowerCase()
  );

  if (usuariosFiltrados.length === 0) {
    return res
      .status(404)
      .json({ mensagem: "Nenhum usuário encontrado para esta cidade" });
  }

  res.json(usuariosFiltrados);
});

app.get("/usuario/sorteado", (req, res) => {
  const indiceSorteado = Math.floor(Math.random() * usuarios.length);
  const usuarioSorteado = usuarios[indiceSorteado];
  res.json(usuarioSorteado);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

// http://localhost:3000/usuario/todos
// http://localhost:3000/usuario/cidade/São Paulo
// http://localhost:3000/usuario/sorteado
