var express = require('express');
var router = express.Router();

//var dspace = require('../src/dspace');
var dspace = require('@billypilgrim/dspace-rest-js');

var {host, path} = require('config').get('remote_server');
var conn = dspace.connect(host, path);

router.get('/', function(req, res, next) {
    conn.getItem().then( item => res.render('index', { item }) );
});

router.get('/:type/:id', function(req, res, next) {
    conn.getItem(req.params.type, req.params.id).then( item => { let title = item.name; res.render('index', { item, title }) } );
});

module.exports = router;
