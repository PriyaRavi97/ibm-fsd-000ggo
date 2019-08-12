let val1 = '';
var value1 = '';
var value2 = '';
var ct=0;
const display = (id)=>{
    let val2 = id;
    val1 =val1 + val2;
    document.getElementById('text').value = val1;
    value2= parseInt(val1);
}

const print=(data)=>{
    console.log(data.result);
    document.getElementById('text').value = data.result;
}

var op = '';
const operator = (id)=>{
    console.log(id);
    if(id == '+'){
        value1 = value2;
        op = id;
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
        console.log(op);
        switch(op){
            case '+':
                url = 'http://localhost:3399/calculators';
                fetch(url + "/add",{
                    method : 'POST',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify({
                        num1:value1,
                        num2:value2
                    })
                }).then(res=>res.json())
                 .then(data=>{
                     print(data);
                 })
                val1 = '';
                break;

            case '-':
                console.log("sub");
                console.log(value1,value2);
            url = 'http://localhost:3399/calculators';
                fetch(url + '/sub',{
                    method : 'POST',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify({
                        num1:value1,
                        num2:value2
                    })
                }).then(res=>res.json())
                .then(data=>{
                    print(data);
                })
                
                val1 = '';
                break;

            case '*':
                    console.log("mu");
                    console.log(value1,value2);
                    url = 'http://localhost:3399/calculators';
                    fetch(url + "/mul",{
                        method : 'POST',
                        headers:{
                            'content-type' : 'application/json'
                        },
                        body:JSON.stringify({
                            num1:value1,
                            num2:value2
                        })
                    }).then(res=>res.json())
                    .then(data=>{
                        print(data);
                    })
                
                val1 = '';
                break;

            case '/':
                    url = 'http://localhost:3399/calculators';
                    console.log(value1,value2);
                    fetch(url + "/div",{
                        method : 'POST',
                        headers:{
                            'content-type' : 'application/json'
                        },
                        body:JSON.stringify({
                            num1:value1,
                            num2:value2
                        })
                    }).then(res=>res.json())
                    .then(data=>{
                        print(data);
                    })
                
                val1 = '';
                break;
            
            default:
                break;
            }
        }
        else{
            document.getElementById('text').value = '';
        }
}