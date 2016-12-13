var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Pais = require('../models/Pais.js');

/* GET /pais Listagem de pais. */
router.get('/', function(req, res, next) {
  Pais.find(function (err, perfil) {
    if (err) return next(err);
    res.json(perfil);
  });
});

/* POST /pais Cadastro de pais */
router.post('/', function(req, res, next) {
  Pais.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /pais/id  Lista filtrada por um pais*/
router.get('/:id', function(req, res, next) {
  Pais.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /pais/:id Salva a edição de pais */
router.put('/:id', function(req, res, next) {
  Pais.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /pais/:id Deletando o pais a partir do id */
router.delete('/:id', function(req, res, next) {
  Pais.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
