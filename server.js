const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>
  res.json({ message: "API de Empréstimos de Livros funcionando." }),
);

app.use("/api/loans", require("./routes/loanRoutes"));

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/book_loans")
  .then(() =>
    app.listen(process.env.PORT || 3000, () => console.log(`Servidor rodando`)),
  )
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err.message));
