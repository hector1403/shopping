var express = require('express');
var mongolian = require('mongolian');

var app = express();
app.use(express.bodyParser());
var db = new mongolian('mongodb://taruntyagi14:marc1982@ds033629.mongolab.com:33629/meandb');

app.put('/', function(req, res) {
    var deal = req.body.deal_description;
    var tags = req.body.all_tags;

    console.log('Received deal: '+ deal);
    console.log('Received all_tags: '+ tags);

    db.collection("deals").insert({
        deal: deal,
        deal_tags: tags.split(",")
    })

    res.contentType('json');
    res.send(JSON.stringify({ status: "success" }));
});


var port = process.env.PORT || 3001;

app.listen(port, function() {
   console.log('Listening on port:' + port);
});

module.exports = app;

