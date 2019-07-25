let val1 = '';
var value1 = '';
var value2 = '';
var ct=0;
const display = (id)=>{
    //console.log('hi');
    let val2 = id;
    val1 =val1 + val2;
    //console.log(val1);
    document.getElementById('text').value = val1;
    value2= parseInt(val1);
    //ct++;
}

var op = '';
const operator = (id)=>{
    if(id == "+"){
        console.log("+");
        value1 = value2;
        op = id;
        console.log(op);
        val1='';
    }
    else if(id=='-'){
        value1 = value2;
        op = id;
        val1='';
    }
    else if(id == '*'){
        value1 = value2;
        op = id;
        val1='';
    } 
    else if(id== '/'){
        value1 = value2;
        op = id;
        val = '';
    }
    else if(id == '='){
        switch(op){
            case '+':
                console.log("add");
                console.log(value1 , value2);
                value1 = cal.sum(parseInt(value1),parseInt(value2));
                document.getElementById('text').value = value1;
                val1 = '';
                break;

            case '-':
                value1 = cal.minus(parseInt(value1),parseInt(value2));
                document.getElementById('text').value = value1;
                val1 = '';
                break;

            case '*':
                value1 = cal.mul(parseInt(value1),parseInt(value2));
                document.getElementById('text').value = value1;
                val1 = '';
                break;

            case '/':
                value1 = cal.div(parseInt(value1),parseInt(value2));
                document.getElementById('text').value = value1;
                val1 = '';
                break;
            
            default:
                break;
            }
        }
        else{
            document.getElementById('text').value = '';
        }
    /*if(ct>1)
    {
    switch(id){
        case '+':
            value1 = cal.sum(parseInt(value1),parseInt(value2));
            document.getElementById('text').value = value1;
            val1 = '';
            break;
        case '-':
          //  value1 = cal.minus(parseInt(value1),parseInt(value2));
           // document.getElementById('text').value = value1;
           value1 = value2; 
           val1 = '';
            break;
        case '*':
            value1 = cal.mul(parseInt(value1),parseInt(value2));
            document.getElementById('text').value = value1;
            val1 = '';
            break;
        case '/':
            value1 = cal.div(parseInt(value1),parseInt(value2));
            document.getElementById('text').value = value1;
            val1 = '';
            break;
        case '=':
            value1 = cal.;
            document.getElementById('text').value = value1;
            break;

        case 'clr':
                document.getElementById('text').value = '';
            break;
        default:
            break;
        }
    }
    else{
        value1 =value2;
        val1 = '';
    }*/
}

class calculation{
    sum(){
        return parseInt(value1 + value2);
    }

    mul(){
        return parseInt(value1*value2);
    }

    div(){
        return parseInt(value1 / value2);
    }

    minus(){
        return parseInt(value1 - value2);
    }

    equal(){
        return parseInt(value1);
    }
}

let cal = new calculation();
