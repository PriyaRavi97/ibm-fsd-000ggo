const server = require('express').Router();
const UserService = require('../services/user.service').UserService;
const userService = new UserService();
const SecurityService = require('../services/security.service').SecurityService;
const securityService = new SecurityService();
// apis
server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'Security Service is Running'
    });
})

server.post('/validateCode',(rq,rs)=>{
    var dt = new Date();
        var time = dt.getTime() + 60000;
    rs.status(200).json({
        message : 'Security Service is Running',
        data : securityService.validateCode(rq.body.code,rq.body.pass,time,(err,res)=>{
            })
})
})

// sign up
server.post('/register',(rq,rs)=>{
    userService.addUser(rq.body,(err,res)=>{
        if(err){
            rs.status(402).json({
                message : 'Unable to proceess the request',
                trace : err
            });
        }else{
            rs.status(200).json({
                message : 'User created successfully',
                users : res 
            });
        }
    });
})

//generate new verification code
server.post('/code',(rq,rs)=>{
    console.log("in the mail page");
    console.log(rq.body.email,rq.body.name);
    if(rq.body.email == undefined || rq.body.name == undefined){
        rs.status(401).json({
            message: 'Please specify valid credentials'
        });
    }else{
        userService.fetchUser(rq.body.email,rq.body.name,(err,res)=>{
            if(err){
                console.log("inside the mail block");
                rs.status(401).json({
                    message: 'Please specify valid credentials'
                });
            }else{
                if(res){
                    // generate jwt token
                    console.log("generate code");
                    const ver_code = securityService.generateCode({
                        name : res[0].name,
                        email : res[0].email
                    });
                    rs.status(200).json({
                        message: 'Verification code sent to your mail. Kindly create your your password within next 10mins'
                    });
                }
            }
        })
    }
})


// generate new token
// server.post('/token',(rq,rs)=>{
//     if(rq.body.email == undefined || rq.body.password == undefined){
//         rs.status(401).json({
//             message: 'Please specify valid credentials'
//         });
//     }else{
//         userService.fetchUser(rq.body.email,rq.body.password,(err,res)=>{
//             if(err){
//                 rs.status(401).json({
//                     message: 'Please specify valid credentials'
//                 });
//             }else{
//                 if(res){
//                     // generate jwt token
//                     console.log("generate code");
//                     const ver_code = securityService.generateToken({
//                         email : res[0].email,
//                     });
//                     const _user = {
//                         id : 1,
//                         ver_code : ver_code,
//                         email : res[0].email,
//                     }
//                     securityService.saveToken(_user,(err,data)=>{
//                         if(err){
//                             rs.status(401).json({
//                                 message: 'Unable to process your request'
//                             });
//                         }else{
//                             rs.status(200).json({
//                                 message : 'Token Generated Successfully',
//                                 token : _token
//                             });
//                         }
//                     });
//                 }else{
//                     rs.status(401).json({
//                         message: 'Please specify valid credentials'
//                     });
//                 }
//             }
//         });
//     }
// })

server.post('/token/refresh',(rq,rs)=>{
    if(rq.body.token == undefined){
        rs.status(401).json({
            message: 'Please specify a valid token'
        });
    }else{
        securityService.refreshToken(rq.body.token,(err,data)=>{
            if(err){
                rs.status(403).json({
                    message : 'Token expired or Invalid'
                });
            }else{
                console.log(data);
                // generate jwt token
                const _token = securityService.generateToken({
                    email : data[0].email,
                    access : data[0].access
                });
                const _user = {
                    id : 1,
                    token : _token,
                    email : data.email
                }
                securityService.saveToken(_user,(err,data)=>{
                    if(err){
                        rs.status(401).json({
                            message: 'Unable to process your request'
                        });
                    }else{
                        rs.status(200).json({
                            message : 'Token refreshed Successfully',
                            refreshToken : _token
                        });
                    }
                });
            }
        });
    }
})
// redirect in case of invalid / no access
server.get('/unauthorize',(rq,rs)=>{
    rs.status(403).json({
        message : 'Unauthorize Access'
    });
})

module.exports = {
    server
}