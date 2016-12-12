var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Tecnologia = require('../models/Tecnologia.js');

/* GET /tecnologia Listagem de tecnologia. */
router.get('/', function(req, res, next) {
  Tecnologia.find(function (err, perfil) {
    if (err) return next(err);
    res.json(perfil);
  });
});

/* POST /tecnologia Cadastro de tecnologia */
router.post('/', function(req, res, next) {
  Tecnologia.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /tecnologia/id  Lista filtrada por um tecnologia*/
router.get('/:id', function(req, res, next) {
  Tecnologia.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /tecnologia/:id Salva a edição de tecnologia */
router.put('/:id', function(req, res, next) {
  Tecnologia.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /tecnologia/:id Deletando o tecnologia a partir do id */
router.delete('/:id', function(req, res, next) {
  Tecnologia.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
