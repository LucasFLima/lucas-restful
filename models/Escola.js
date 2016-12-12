var mongoose = require('mongoose');

var EscolaSchema = new mongoose.Schema({
  nome:  String,
  sigla: String,
  endereco: String,
  nivel: String
});

module.exports = mongoose.model('Escola', EscolaSchema);
