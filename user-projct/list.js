let i=0;
let j=0;
const prjct_memb = [];
const prj_name = [];

function remove(){
	prj_name[j]=document.getElementById('prct_name').value;
	prjct_memb[j]=document.getElementById('user_nme').value;
	console.log(j,prj_name[j],prjct_memb[j]);
	j++;
	var y = document.getElementById("user_nme");
	y.remove(y.selectedIndex);
	
}

function list(){
	let row = '';
	let pname = document.getElementById('project').value;
	for(k=0 ; k<j ; k++){
		if(pname == prj_name[k]){
			console.log(prjct_memb[k]);
			row += `${prjct_memb[k]}</br>`;
		}
	}
	console.log(row);
	document.getElementById('list').innerHTML = row ;
}
const getdata = ()=>{

	const _url1 = 'http://localhost:1122/projects';
            fetch(_url1,{
                headers:{
                    'username' : 'tech',
                    'password' : 'tech'
                }
            })
            .then(res=>res.json())
            .then(projects=>{
            	project(projects);
            })

	const _url = 'http://localhost:1122/users';
            fetch(_url,{
                headers:{
                    'username' : 'tech',
                    'password' : 'tech'
                }
            })
            .then(res=>res.json())
            .then(users=>{
                user(users);
            })
}

const user = (name1)=>{
	let nme = '';
	name1.users.forEach((e)=>{
		nme += `<option>${e.name}</option>`;
	});
	nme += `</select>`;
	display(nme);
}

const project = (prjct)=>{
	let prj = '';
	prjct.projects.forEach((e)=>{
		prj += `<option>${e.name}</option>`;
	});
	prj+=`</select>`
	display1(prj);
}

const display1 = (prt)=>{
	let records = `Project : <select id="prct_name"> ${prt}` 
	document.getElementById('projects').innerHTML = records;
}

const display = (usr)=>{
	let records = `user : <select id="user_nme"> ${usr}
	<input type="button" name="save" value="save" onclick="remove()">` 
	document.getElementById('users').innerHTML = records;
}