const router = require('express').Router();
const users = require('../dbs/users').users;
const Service = require('../service/user.service').Service;
const validate = require('../service/security.service').validate;
const service = new Service();

// status api
router.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'User Service is running'
    });
});

// login 
router.post('/login',(rq,rs)=>{
    if(service.isUser(rq.body.mail , rq.body.password)){
        let token = service.generateToken(rq);
        rs.status(200).json({
            message : 'Token Generated Successfully',
            token : token
        })
    }
    else{
        rs.status(400).json({
            message : 'Invalid User credentials'
        });
    }
});

routes.get('/add/:num1/:num2', (rq, rs) => {
    rs.setHeader('content-type', 'application/json');
    rs.end(JSON.stringify({
        result: calc._add(parseInt(rq.params.num1), parseInt(rq.params.num2))
    }))
})

module.exports.useRoutes = router;