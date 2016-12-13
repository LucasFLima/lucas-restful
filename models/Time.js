var mongoose = require('mongoose');

var TimeSchema = new mongoose.Schema({
  nome:  String,
  UF: String,
  municipio: String,
  divisao: String,
  cor: String,
  mascote: String
});

module.exports = mongoose.model('Time', TimeSchema);
