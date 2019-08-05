const client = require('mongodb').MongoClient;
const UserConstants = require('./utils.service').UserConstants;
const bcrypt = require('bcrypt');
const Email = require('./email.service').Email;
const emailService = new Email();
// const SecurityService = require('./security.service').SecurityService;
// const securityService = new SecurityService();

class Service {

    constructor(){
        
    }
    //verify user
     fetchUser(_user,_pass,callback){
         //const hashPassword = this.generateHash(_pass);
         const _url = UserConstants.mongo.url + UserConstants.mongo.port;
         client.connect(_url,(err,connection)=>{
             connection.db(UserConstants.mongo.db).collection(UserConstants.mongo.collections.user).find({email: _user}).toArray((err,response)=>{
                 callback(err,response);
             });
         });
     }

    
     // generate hash
    // generateHash(_pass){
    //     return bcrypt.hashSync(_pass,1);
    // }

    register(user){
        this.email(user);
    //    this.users.push(user);
    }

    isUser(userName,pass){
        return this.users.find((u)=>{
            return u.name == userName && u.pass == pass;
        });
    }

    add(_user,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('block').insert(_user,(err,response)=>{
                callback(err,response);
            });
        });
    }

    // addUser(_user,callback){
    //     // update password
    //     _user.password = this.generateHash(_user.password);
    //     const _url = UserConstants.mongo.url + UserConstants.mongo.port;
    //     client.connect(_url,(err,connection)=>{
    //         connection.db(UserConstants.mongo.db).collection(UserConstants.mongo.collections.user).insert(_user,(err,response)=>{
    //             callback(err,response);
    //         });
    //     });
    //  } // end of add user
    
     // // get all users
    fetchUsers(callback){
        const _url = UserConstants.mongo.url + UserConstants.mongo.port;
        client.connect(_url,(err,connection)=>{
            connection
            .db(UserConstants.mongo.db)
            .collection(UserConstants.mongo.collections.user)
            .find()
            .toArray((err,response)=>{
                callback(error,response);
            });
        });
    } // end of fetch user


    email(user,otp){
        let userObj ={
            subject : "User Registration",
            body : `<div>Dear <b>${user.name}</b></div>
                    <div> Your Verification code is ${otp}</div>
                    <div>Thank you for registering</div>`,
            from : null,
            to : user.email
        }
        emailService.email(userObj);
       // emailService.oldTime(time);

    }
}

module.exports={
    UserService : Service
}