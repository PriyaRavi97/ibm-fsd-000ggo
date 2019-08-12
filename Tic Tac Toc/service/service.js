const MongoClient = require('mongodb').MongoClient;
const UserConstants = require('../utils/utils').UserConstants; 
class UserService {

    fetchUsers(callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('block').find({}).toArray((error,block)=>{
                if(!error){
                    callback(block);
                }
            });
        });
    }
    
    add(_user,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('block').insert(_user,(err,response)=>{
                callback(err,response);
            });
        });
    }

    drop(_user,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('block').drop((err,response)=>{
                callback(err,response);
            });
            conn.db(UserConstants.mongo.db).collection('player').drop((err,response)=>{
                callback(err,response);
            });
        });
    }

    addUser(_user,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('player').insert(_user,(err,response)=>{
                callback(err,response);
            });
        });
    }
}

module.exports = {
    UserService
}