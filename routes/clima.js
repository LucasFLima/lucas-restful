var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Clima = require('../models/Clima.js');

/* GET /clima Listagem de clima. */
router.get('/', function(req, res, next) {
  Clima.find(function (err, perfil) {
    if (err) return next(err);
    res.json(perfil);
  });
});

/* POST /clima Cadastro de clima */
router.post('/', function(req, res, next) {
  Clima.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /clima/id  Lista filtrada por um clima*/
router.get('/:id', function(req, res, next) {
  Clima.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /clima/:id Salva a edição de clima */
router.put('/:id', function(req, res, next) {
  Clima.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /clima/:id Deletando o clima a partir do id */
router.delete('/:id', function(req, res, next) {
  Clima.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
