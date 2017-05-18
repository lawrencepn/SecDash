var express = require('express');
var router = express.Router();
var http = require('http');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var options = {
        host: 'jira.standardbank.co.za',
        path: '/rest/api/latest/issue/ROAS-2',
        port : 8091
    };

    var body = null;
    var main = res;

    var req = http.get(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));

        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        res.on('data', function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function() {
            body = Buffer.concat(bodyChunks);
            //console.log('BODY: ' + body);
            main.send(body)
            // ...and/or process the entire body here.
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });

    //res.send('respond with a resource');

});

module.exports = router;
