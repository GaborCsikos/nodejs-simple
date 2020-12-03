var Todos = require('../models/todo-models');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/api/todo', function(req, res){

        Todos.find({}, function(err, result){
            if(err){
                console.log('error:', err);
            }else{
                res.send(result);
            }
        });
    });

    app.get('/api/todo/:id', function(req, res){

        Todos.findById({ _id: req.params.id}, function(err, result){
            if(err){
                console.log('error finding id:', req.params.id);
                console.log('error:', err);
            }else{
                res.send(result);
            }
        });
    });

    app.post('/api/todo', function(req, res){

        var newTodo = Todos({
            username : req.body.username,
            todo : req.body.todo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment
        });

        newTodo.save(function(err, result){
            if(err){
                console.log('error adding todo');
                console.log('error:', err);
            }else{
                res.send(result);
            }
        });
    });

    app.put('/api/todo/:id', function(req, res){

        Todos.findByIdAndUpdate(req.params.id, {
            username : req.body.username,
            todo : req.body.todo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment   

        }, function(err, result){
            if(err){
                console.log('error updating id:', req.params.id);
                console.log('error:', err);
            }else{
                res.send(result);
            }
        });
    });

    app.delete('/api/todo/:id', function(req, res){

        Todos.findByIdAndDelete({ _id: req.params.id}, function(err, result){
            if(err){
                console.log('error deleteing id:', req.params.id);
                console.log('error:', err);
            }else{
                res.send('Successfully deleted todo');
            }
        });
    });
    
}