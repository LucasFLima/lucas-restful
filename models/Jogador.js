var mongoose = require('mongoose');

var JogadorSchema = new mongoose.Schema({
  nome:  String,
  idade: String,
  time: String,
  posicao: String,
  foto: String,
  endereco: String
});

module.exports = mongoose.model('Jogador', JogadorSchema);
