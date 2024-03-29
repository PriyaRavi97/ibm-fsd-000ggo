const routes = require('express').Router();
const UserService = require('../service/service').UserService;
const userService = new UserService();
const UserConstants = require('../utils/utils').UserConstants;

routes.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : UserConstants.messages.userServiceStatus
    });
});

routes.get('/',(rq,rs)=>{
    userService.fetchUsers((block)=>{
        rs.status(200).json({
            message : 'Users Fetched',
            block : block
        })
    });    
});
// add a new user
routes.post('/add',(rq,rs)=>{
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

routes.post('/addUser',(rq,rs)=>{
    userService.addUser(rq.body,(err,result)=>{
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

routes.post('/drop',(rq,rs)=>{
    userService.drop((err,result)=>{
        if(err){
            rs.status(400).json({
                message : 'Unable to drop the collection'
            });
        }else{
            rs.status(200).json({
                message : 'Game over',
            });
        }
    });
});

module.exports = {
    userRoutes : routes
}