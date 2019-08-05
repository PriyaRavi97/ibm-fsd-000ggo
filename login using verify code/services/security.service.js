const client = require('mongodb').MongoClient;
const UserConstants = require('./utils.service').UserConstants;
const UserService = require('./user.service').UserService;
const userService = new UserService();
const jwt = require('jsonwebtoken');    
const otpGenerator = require('otp-generator');

let otp = '';
let oldt = '';

class Service {
    // authorize
    authorize (request,response,next){
        const _token = request.headers.token;
        if(!_token){
            // stop access
            response.redirect('/auth/unauthorize');
        }else{
            const _tDetails = this.verifyToken(_token);
            if(_tDetails){
                // continue the flow
                const _path = request.baseUrl + request.path;
                if(_tDetails.access == _path){
                    next();
                }else{
                    response.redirect('/auth/unauthorize');
                }
            }else{
                // stop access
                response.redirect('/auth/unauthorize');
            }
        }
    }

    otime(oldt){
        oldt = oldt;
    }
    // verify token
    verifyToken(_token){
        let validToken = false;
        try{
            const isValid = jwt.verify(_token,UserConstants.jwt.key); 
            if(isValid){
                validToken = isValid;
            }
        }catch(error){

        }
        return validToken;
    }
    //create verification code

    // create jwt token 
    generateToken(_user){
    
    const _token = jwt.sign(
            _user
        ,
        UserConstants.jwt.key,{
            expiresIn : '120000000ms'
        });
        return _token;
    }

    generateCode(_user){
        otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
        userService.email(_user,otp);
    }

    validateCode(gotp,pass,oldt){
        var dt = new Date();
        var iniTimestamp = dt.getTime();
        var curr_time = iniTimestamp; 
        console.log(oldt,curr_time);        
        console.log(iniTimestamp,oldt);


        if((gotp == otp) && (curr_time<=oldt)){
            return "The password has been sent";
        }
        else{
            return "The verification code got expired, kindly retry with the new verification code which is sent to your mail ID."
        }
    }

    saveToken(_user,callback){
        const _url = UserConstants.mongo.url + UserConstants.mongo.port;
        client.connect(_url,(err,connection)=>{
            const id = _user.id;
            delete _user.id;
            connection
            .db(UserConstants.mongo.db)
            .collection(UserConstants.mongo.collections.security)
            .update(
                {_id: id },
                {$set: _user},
                {upsert: true},
                (error,response)=>{
                callback(error,response);
            });
        });
    } // end of save Token

    // refresh an existing token if valid
    refreshToken(_token,callback){
        const _user = this.verifyToken(_token);
        if(_user){
            this.fetchTokenDetails(_token,_user.email,(err,data)=>{
                callback(err,data);
            });
        }
    } // end of refresh Token
    fetchTokenDetails(_token,_email,callback){
        client.connect(UserConstants.mongo.url+UserConstants.mongo.port,(err,conn)=>{
            conn
            .db(UserConstants.mongo.db)
            .collection(UserConstants.mongo.collections.security)
            .find({_token : _token, email: _email})
            .toArray((error,data)=>{
                callback(error,data);
            });
        });
    }
}

module.exports={
    SecurityService : Service
}