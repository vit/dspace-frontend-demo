var express = require('express');
var router = express.Router();

var dspace = require('@billypilgrim/dspace-rest-js');

var host = null;
var path = '/rest';

try {
    var remote_server = require('config').get('remote_server');
    host = remote_server.host || host;
    path = remote_server.path || path;
} catch(e) {
}

host = process.env.REMOTE_HOST || host;
path = process.env.REMOTE_PATH || path;

if(!host)
    throw "Remote host missing. Please set REMOTE_HOST environment variable or edit config file.";

var conn = dspace.connect(host, path);

router.get('/', function(req, res, next) {
    conn.getItem().then( item => res.render('index', { item }) );
});

router.get('/:type/:id', function(req, res, next) {
    conn.getItem(req.params.type, req.params.id).then( item => { let title = item.name; res.render('index', { item, title }) } );
});

module.exports = router;
