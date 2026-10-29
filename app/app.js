const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = 3000;

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
});

app.get("/", (req, res) => {
  res.send("Sistema de Reservas Esportivas em funcionamento!");
});

app.get("/quadras", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, modalidade, localizacao FROM quadras"
    );

    res.json(rows);
  } catch (error) {
    res.status(500).json({
      erro: "Não foi possível consultar as quadras."
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Aplicação disponível na porta ${PORT}`);
});
