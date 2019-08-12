const route = require('express').Router();
const calc  = require('../service/calculate.service').calculate;
const calculator = new calc();

route.post('/add',(rq,rs)=>{
    console.log("add");
    rs.status(200).json({	
        result : calculator.add(parseInt(rq.body.num1),parseInt(rq.body.num2))
    })
})


route.post('/sub',(rq,rs)=>{
    console.log("sub");
    rs.status(200).json({
        result : calculator.sub(parseInt(rq.body.num1),parseInt(rq.body.num2))
    })
})

route.post('/mul',(rq,rs)=>{
    console.log("mul");
    rs.status(200).json({
        result : calculator.mul(parseInt(rq.body.num1),parseInt(rq.body.num2))
    })
}) 

route.post('/div',(rq,rs)=>{
    console.log("div");
    rs.status(200).json({
        result : calculator.div(parseInt(rq.body.num1),parseInt(rq.body.num2))
    })
})

route.post('/sqrt',(rq,rs)=>{
    rs.status(200).json({
        result : calculator.sqrt(parseInt(rq.body.num))
    })
})

module.exports.calculateRouter = route;