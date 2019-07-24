const CService = require('../services/catelog.Service').CategoryService;

const categoryService = new CService();
const express = require('express');
const server = express();

// get all projects

server.get('/',(req,res)=>{
    res.end(JSON.stringify({
        category : categoryService._all()
    }));
});

module.exports.categoryRoutes = server;