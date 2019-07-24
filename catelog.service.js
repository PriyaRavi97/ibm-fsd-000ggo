const category = require('../db/category').category;

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
}
module.exports.CategoryService = CategoryService;