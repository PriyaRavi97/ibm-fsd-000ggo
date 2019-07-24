let product = '';
let index = 0;
let i = 0 ;
let prices = [];
let quantity=[];
let total = [];
let grand_total = 0 ;

const getdata = ()=>{
	const _url1 = 'http://localhost:1297/category';
            fetch(_url1)
            .then(res=>res.json())
            .then(list=>{
            	category(list);
            })
}

function find(){
	index++;
	const _url1 = 'http://localhost:1297/category';
            fetch(_url1)
            .then(res=>res.json())
            .then(list=>{
            	findItem(list);
            })
}

const findItem = (list)=>{
	product = document.getElementById("cat_name").value;
	
	list.category.forEach((e)=>{
		if(e.name == product){
			quantity[i]=1;
			prices[i]=e.price;
			total[i]=prices[i]*quantity[i];
			row += `<tr><td>${e.name}</td>

					<td><input type="button" value="-" onclick="quan(${e.id},${index},-1)">&nbsp
					<span id=${e.name}>${quantity[i]}</span>
					&nbsp<input type="button" value="+" onclick="quan(${e.id},${index},1)"></td>

					<td><span id='${e.price}'>${e.price}</span></td>

					<td><span id=${e.typ}>${total[i]}</span></td>
					</tr>`;
					
			grand_total = parseInt(grand_total) + parseInt(prices[i]);
			document.getElementById('gtotal').value = grand_total;
			i++;
		}

	});

	document.getElementById('tabl').innerHTML = row ;
}



const category = (list)=>{

	let lst = '';
	list.category.forEach((e)=>{
		lst += `<option>${e.name}</option>`;
	});
	lst+=`</select>`
	display(lst);
}

const display = (prt)=>{
	let records = `Category : <select id="cat_name"> ${prt}` 
	document.getElementById('catelog').innerHTML = records;
}

let row = `<table border="3px"><tr>
					<th>Name</th>
					<th>Quantity</th>
					<th>Price 
						<select id="cost" onchange="amount()">
							<option>In rs</option>
							<option>In $</option>
						</select></th>
					<th>Total</th>
				</tr>`;



const amount = () =>{
	let val = document.getElementById("cost").value;
	let price = '';
	const _url1 = 'http://localhost:1297/category';
            fetch(_url1)
            .then(res=>res.json())
            .then(list=>{
            	if(val=='In $'){
            	for(let k=0 ; k<index ; k++){
            		price = parseInt(prices[k]) / 50;
					document.getElementById(list.category[k].price).innerText = price;
				}
				}
				else{
					for(let k=0 ; k<index ; k++){
					price = prices[k];
					document.getElementById("price").innerText = price;
				}
			}
         })  
}

const quan= (id,ind,value) =>{
	const _url1 = 'http://localhost:1297/category';
            fetch(_url1)
            .then(res=>res.json())
            .then(list=>{
    
	quantity[ind-1] = parseInt(quantity[ind-1]) + parseInt(value);
	document.getElementById(list.category[id-1].name).innerText = quantity[ind-1];
	
	total[ind-1]=parseInt(prices[ind-1]) * parseInt(quantity[ind-1]);
	document.getElementById(list.category[id-1].typ).innerHTML = total[ind-1];
	if(value==-1)
	{
		grand_total = parseInt(grand_total) - parseInt(prices[ind-1]);
			document.getElementById('gtotal').value = grand_total;
	}
	else{
			grand_total = parseInt(grand_total) + parseInt(prices[ind-1]);
			document.getElementById('gtotal').value = grand_total;
	}
			
})

}