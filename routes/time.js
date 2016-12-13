var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Time = require('../models/Time.js');

/* GET /time Listagem de time. */
router.get('/', function(req, res, next) {
  Time.find(function (err, perfil) {
    if (err) return next(err);
    res.json(perfil);
  });
});

/* POST /time Cadastro de time */
router.post('/', function(req, res, next) {
  Time.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /time/id  Lista filtrada por um time*/
router.get('/:id', function(req, res, next) {
  Time.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /time/:id Salva a edição de time */
router.put('/:id', function(req, res, next) {
  Time.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /time/:id Deletando o time a partir do id */
router.delete('/:id', function(req, res, next) {
  Time.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
