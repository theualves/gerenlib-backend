const Loan = require("../models/Loan");

exports.listLoans = async (req, res) => {
  const loans = await Loan.find();
  res.json(loans);
};

exports.getLoanById = async (req, res) => {
  const loan = await Loan.findById(req.params.id);
  if (!loan)
    return res.status(404).json({ message: "Empréstimo não encontrado." });
  res.json(loan);
};

exports.createLoan = async (req, res) => {
  const loan = await Loan.create(req.body);
  res.status(201).json(loan);
};

exports.updateLoan = async (req, res) => {
  const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!loan)
    return res.status(404).json({ message: "Empréstimo não encontrado." });

  res.json(loan);
};

exports.deleteLoan = async (req, res) => {
  const loan = await Loan.findByIdAndDelete(req.params.id);
  if (!loan)
    return res.status(404).json({ message: "Empréstimo não encontrado." });
  res.json({ message: "Empréstimo removido com sucesso." });
};
