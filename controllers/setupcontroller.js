var Todos = require('../models/todo-models');

module.exports = function(app){

    app.get('/api/init', function(req, res){
        var initData = [
                {
                    username : 'Aizhan',
                    todo : 'Dance',
                    isDone: false,
                    hasAttachment: false
                },
                {
                    username : 'Szabina',
                    todo : 'Baheve good',
                    isDone: false,
                    hasAttachment: false
                }


        ];
        Todos.create(initData, function(err, result){
            res.send(result);
        });


    });
}