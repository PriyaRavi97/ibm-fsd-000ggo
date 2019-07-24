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

server.use('/category',categoryRoutes);

// PORT Binding
server.listen(1297,()=>{
    console.log('Server started at 1297');
});
