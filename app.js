
const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');

const categoryRoutes = require('./apis/category').categoryRoutes;
const setContentHeader = require('./services/utils').setContentHeader;

// apply json parser
server.use(parser.json());

// apply cors
server.use(cors());

server.get('/status',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message: "Server is RUNNING"
    }));
});


// /message?name=Mohsin&email=tech@gma.com
server.get('/message',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        name : req.query.name,
        email : req.query.email
    }));
});

// add routes to server
server.use('/category',categoryRoutes);

// PORT Binding
server.listen(1297,()=>{
    console.log('Server started at 1297');
});
