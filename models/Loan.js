const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    tituloLivro: { type: String, required: true, trim: true },
    nomeLeitor: { type: String, required: true, trim: true },
    dataEmprestimo: { type: Date, required: true, default: Date.now },
    dataDevolucao: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Loan', loanSchema);
