let product = '';
let index = 0;
let i = 0 ;
let prices = [];

const getdata = ()=>{
	const _url1 = 'http://localhost:1297/category';
            fetch(_url1)
            .then(res=>res.json())
            .then(list=>{
            	category(list);
            })
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
	console.log(records);
	document.getElementById('catelog').innerHTML = records;
}


const findItem = (list)=>{
	let row = `<table border="3px">
				<tr>
					<th>Name</th>
					<th>Quantity</th>
					<th>Price 
						<select id="cost" onchange="amount()">
							<option>In rs</option>
							<option>In $</option>
						</select></th>
					<th>Total</th>
				</tr>`;

	product = document.getElementById("cat_name").value;
	
	list.category.forEach((e)=>{
		if(e.name == product){
			prices[i]=e.price;

			row += `<br><tr><td>${e.name}</td><td>${quantity[i]}</td><td id="price">${prices[i]}</td><td></td></tr>`
		}
	});
	document.getElementById('tabl').innerHTML = row ;
}

function find(){
	index++;
	console.log("find");
	const _url1 = 'http://localhost:1297/category';
            fetch(_url1)
            .then(res=>res.json())
            .then(list=>{
            	findItem(list);
            })
}


const amount = () =>{
	let val = document.getElementById("cost").value;
	let price = '';
	
	const _url1 = 'http://localhost:1297/category';
            fetch(_url1)
            .then(res=>res.json())
            .then(list=>{
            	console.log(index);
            	for(let k=0 ; k<index ; k++){
            	if(val=='In $'){
            		console.log(prices[k]);
					price = parseInt(prices[k]) * 50;
					console.log(price);
				}
				else{
					price = price + 1;
				}
			}
            })
            console.log(price);
            document.getElementById("price").innerHTML = price;

}