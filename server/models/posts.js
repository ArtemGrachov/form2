let ObjectID = require('mongodb').ObjectID,
    db = require('../db');

exports.all = function(cb) {
    db.get().collection('posts').find().toArray(
        function(err, docs) {
            cb(err, docs);
        }
    );
};

exports.findById = function(id, cb) {
    db.get().collection('posts').findOne({
            _id: ObjectID(id)
        },
        function(err, doc) {
            cb(err, doc);
        }
    );
};

exports.create = function(post, cb) {
    db.get().collection('posts').insert(post, function(err, result) {
        cb(err, result);
    });
};

exports.update = function(id, newData, cb) {
    db.get().collection('posts').updateOne({
            _id: ObjectID(id)
        }, newData,
        function(err, result) {
            cb(err, result);
        });
};

exports.delete = function(id, cb) {
    db.get().collection('posts').deleteOne({
            _id: ObjectID(id)
        },
        function(err, result) {
            cb(err, result);
        }
    );
};

exports.clear = function(cb) {
    db.get().collection('posts').remove(
        function(err, result) {
            cb(err, result);
        }
    )
}