let ObjectID = require('mongodb').ObjectID,
    db = require('../db');

exports.newUser = function(user, cb) {
    db.get().collection('users').insert(user, function(err, result) {
        cb(err, result);
    });
}

exports.allUsers = function(cb) {
    db.get().collection('users').find().toArray(
        function(err, docs) {
            cb(err, docs);
        }
    );
};

exports.getUser = function(username, cb) {
    db.get().collection('users').findOne({
            username: username
        },
        function(err, user) {
            cb(err, user);
        }
    );
}