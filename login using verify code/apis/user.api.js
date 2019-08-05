const router = require('express').Router();
const ServiceNew = require('../services/user.service').UserService;
const service = new ServiceNew();

const SecurityService = require('../services/security.service').SecurityService;
const securityService = new SecurityService();

// status api
router.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'User Service is running'
    });
});

// sign up 
router.post('/register',(rq,rs)=>{
    service.generateCode(rq.body);
    rs.status(200).json({
        message : 'User has been registered successfully'
    });
});

router.post('/add',(rq,rs)=>{
    userService.add(rq.body,(err,result)=>{
        if(err){
            rs.status(400).json({
                message : 'Unable to process the request'
            });
        }else{
            rs.status(200).json({
                message : 'User created Successfully',
                result : result
            });
        }
    });
});



// show all users
router.get('/',(rq,rs)=>{
    rs.status(200).json({
        message : 'Users',
    });
});

// generate token
// router.post('/token',(rq,rs)=>{
//     // generate token
//     const userExists = service.isUser(rq.body.user,rq.body.pass);
//     if(userExists){
//         const token = SecurityService.generateToken(userExists);
//         rs.status(200).json({
//             message : 'Token Generated Successfully',
//             token : token
//         })
//     }else{
//         rs.status(400).json({
//             message : 'Invalid User credentials'
//         });
//     }
// });

module.exports.useRoutes = router;