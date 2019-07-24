const router = require('express').Router();

const CategoryService = require('../services/catalog.service').CategoryService;

const service = new CatagoryService();

// status api

router.get('/status',(rq,rs)=>{

    rs.status(200).json({

        message : 'Category Service is running'

    });

});


// show all users

router.get('/',(rq,rs)=>{

    rs.status(200).json({

        message : 'Users',

        data : service._all()

    });

});


module.exports.useRoutes = router;