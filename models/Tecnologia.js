var mongoose = require('mongoose');

var TecnologiaSchema = new mongoose.Schema({
  nome:  String,
  sigla: String,
  site: String,
  situacao: String
});

module.exports = mongoose.model('Tecnologia', TecnologiaSchema);
