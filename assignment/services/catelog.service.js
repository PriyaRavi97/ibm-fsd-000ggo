const category = require('../db/category').category;
const Email = require('./email.service').Email;
const emailService = new Email();

class CategoryService{

    constructor(){
        this.category = category;
    }

    _all(){
        return this.category;
    }

    _add(cate){
        this.category.push(cate);
        return this.category;
    }

    email(user){
        let userObj ={
            subject : "User Registration",
            body : `<div>Dear <b>${user.name}</b></div>
                    <div>Thank you for registering</div>`,
            from : null,
            to : user.email
        }
        emailService.email(userObj);
    }
}
module.exports.CategoryService = CategoryService;