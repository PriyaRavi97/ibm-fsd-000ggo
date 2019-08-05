const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');

// apis
const userAPis = require('./apis/user.api').useRoutes;
const securityAPis = require('./apis/security.api').server;

// const Users = require('./services/user.service').Email;
// const Utils = require('./services/utils.service').Email;
// const validate = require('./services/security.service').validate;
 const Email = require('./services/email.service').Email;
 const emailService = new Email();

// const SecurityService = require('./services/security.service').SecurityService;
// const securityService = new SecurityService();
server.use(parser.json());

server.use(cors());

// apis
server.get('/status',(rq,rs)=>{
    //emailService.send();
    rs.status(200).json({
        message : 'Server is Running'
    });
});

// enable authentication
// secured access only
// server.use('/products',(rq,rs,next)=>{
//     securityService.authorize(rq,rs,next);
// });

server.use('/users',userAPis);
server.use('/auth',securityAPis);

const PORT = 9998;
server.listen(PORT,()=>{
    console.log(`Server is Started at ${PORT}`);
});

