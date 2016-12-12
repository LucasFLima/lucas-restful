var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Escola = require('../models/Escola.js');

/* GET /escola Listagem de escola. */
router.get('/', function(req, res, next) {
  Escola.find(function (err, perfil) {
    if (err) return next(err);
    res.json(perfil);
  });
});

/* POST /escola Cadastro de escola */
router.post('/', function(req, res, next) {
  Escola.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /escola/id  Lista filtrada por um escola*/
router.get('/:id', function(req, res, next) {
  Escola.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /escola/:id Salva a edição de escola */
router.put('/:id', function(req, res, next) {
  Escola.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /escola/:id Deletando o escola a partir do id */
router.delete('/:id', function(req, res, next) {
  Escola.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
