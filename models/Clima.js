var mongoose = require('mongoose');

var ClimaSchema = new mongoose.Schema({
  nome:  String,
  minima: String,
  maxima: String,
  umidade: String,
  vegetacao: String,
  abrangencia: String
});

module.exports = mongoose.model('Clima', ClimaSchema);
