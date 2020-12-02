var configValue = require('./config.json')
module.exports = {
        getDBConnection: function(){
            return 'mongodb+srv://'+configValue.username +':'+configValue.password
            +'@nodetodo.pxmrp.mongodb.net/'+configValue.dbName+'?retryWrites=true&w=majority'; 
        }

};