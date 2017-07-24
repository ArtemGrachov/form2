let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID,
    db = require('./db'),
    postsController = require('./controllers/posts');

app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.send('Hello API');
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/posts', postsController.all);
app.get('/posts/:id', postsController.findById);
app.post('/posts', postsController.create);
app.put('/posts/:id', postsController.update);
app.delete('/posts/:id', postsController.delete);
app.delete('/posts', postsController.clear);

db.connect('mongodb://localhost:27017/formapi', function(err) {
    if (err) {
        return console.log(err);
    }
    app.listen(3012, function() {
        console.log('API app started')
    })
})