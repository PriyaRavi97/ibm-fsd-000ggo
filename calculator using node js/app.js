const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const calculateRoutes = require('./apis/calculate.api').calculateRouter;

server.use(parser.json());
server.use(cors());

server.get('/status',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message: "Server is RUNNING"
    }));
});

server.use('/calculators',calculateRoutes);

server.listen(3399,()=>{
    console.log('Server started at 3399');
});
