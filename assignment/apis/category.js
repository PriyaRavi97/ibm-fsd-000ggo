const router = require('express').Router();
const CategoryService = require('../services/catelog.service').CategoryService;
const service = new CategoryService();
//const server = new router();
// get all projects

router.get('/',(req,res)=>{
    res.end(JSON.stringify({
        category : service._all()
    }));
});

router.post('/email',(rq,rs)=>{
	service.email(rq.body);
})


module.exports.categoryRoutes = router;