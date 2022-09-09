const mongoose = require("mongoose");

const financialSchema = new mongoose.Schema({
  fId: {
    type: String,
    required: true,
  },

  incomeList: {
    type: String,
    required: true,
  },

  outcomeList: {
    type: String,
    required: true,
  },

  totalIncome: {
    type: String,
    required: true,
  },
  totalOutcome: {
    type: String,
    required: true,
  },
  money: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Financial", financialSchema);
