
    add(num1,num2){
        console.log("add-ser");
        return num1 + num2;
    }

    
    //const sub = (i,j)=>{
    sub(num1,num2){
        console.log("sub-ser");
        return i - j;
    }

    
    mul(num1,num2){
        console.log("mul-ser");
        return num1 * num2;
    }


    div(num1,num2){
        console.log("div-ser");
        if(j == 0){
            throw new Error('Division by Zero');
        }else{
            return num1 / num2; 
        }
    } 

module.exports.calculate = calculate;