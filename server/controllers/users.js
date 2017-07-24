let Users = require('../models/users');

exports.newUser = function(req, res) {
    let user = {
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
    };
    Users.newUser(user, function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        };
        res.send(user);
    });
};

exports.allUsers = function(req, res) {
    Users.allUsers(function(err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        };
        res.send(docs);
    });
};

exports.getUser = function(req, res) {
    Users.getUser(req.params.username, function(err, user) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        };
        res.send(user);
    });
};