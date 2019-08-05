const UserConstants = {
    mongo: {
        url : 'mongodb://localhost:',
        port : 27017,
        db : 'userjwt',
        collections: {
            user : 'user',
            security : 'security',
            product : 'product'
        }
    },
    smtp : {
        provider : 'gmail',
        address :  'ibmtechtraining007@gmail.com',
        password : 'India@786'
    },
    jwt :{
        key : 'thisisourjwtprivatekey'
    }
}

module.exports = {
    UserConstants
}