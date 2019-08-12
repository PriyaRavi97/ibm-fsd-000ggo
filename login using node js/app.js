const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');

const loginRoutes = require('./apis/login.api').useRoutes;
const utils = require('./service/utils').utils;

server.use(parser.json());
server.use(cors());

server.get('/status',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message: "Server is RUNNING"
    }));
});

server.use('/login',loginRoutes);

server.listen(9888,()=>{
    console.log('Server started at 9888');
});
