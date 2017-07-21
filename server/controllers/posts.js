let Posts = require('../models/posts');

exports.all = function(req, res) {
    Posts.all(function(err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(docs);
    });
};

exports.findById = function(req, res) {
    Posts.findById(req.params.id, function(err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(doc);
    });
};

exports.create = function(req, res) {
    let post = {
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body,
    };
    Posts.create(post, function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(post);
    });
};

exports.update = function(req, res) {
    Posts.update(req.params.id, {
            userId: req.body.userId,
            title: req.body.title,
            body: req.body.body
        },
        function(err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            };
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.sendStatus(200);
        }
    );
};

exports.delete = function(req, res) {
    Posts.delete(req.params.id, function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.sendStatus(200);
    });
};

exports.clear = function(req, res) {
    Posts.clear(function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.sendStatus(200);
    })
}