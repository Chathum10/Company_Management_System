const mongoose = require("mongoose");

const financialSchema = new mongoose.Schema({
  fId: {
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
  ifweek: {
    type: String,
    required: true,
  },
  isweek: {
    type: String,
    required: true,
  },
  itweek: {
    type: String,
    required: true,
  },
  ifoweek: {
    type: String,
    required: true,
  },
  ifiweek: {
    type: String,
    required: true,
  },
  ofweek: {
    type: String,
    required: true,
  },
  osweek: {
    type: String,
    required: true,
  },
  otweek: {
    type: String,
    required: true,
  },
  ofoweek: {
    type: String,
    required: true,
  },
  ofiweek: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Financial", financialSchema);
