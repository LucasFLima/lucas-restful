var mongoose = require('mongoose');

var PaisSchema = new mongoose.Schema({
  nome:  String,
  continente: String,
  populacao: String,
  anoIndependencia: String,
  presidente: String,
  regimePolitico: String
});

module.exports = mongoose.model('Pais', PaisSchema);
