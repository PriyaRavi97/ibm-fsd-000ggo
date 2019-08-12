
const display = ()=>{
let name = document.getElementById('name');
let father = document.getElementById('fathr');
let dob1 = document.getElementById('DOB');
let addr = document.getElementById('addr');
let bldgrp = document.getElementById('blood');
let vehino = document.getElementById('vehno');

console.log(name);

document.getElementById('cname').value = name;
document.getElementById('father').value = father;
document.getElementById('blood-grp').value = bldgrp;
document.getElementById('address').value = addr;
document.getElementById('dob').value = dob1;
document.getElementById('veh-no').value = vehino;
}