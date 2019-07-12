let trainer = [];
let i = 0;
let subject = ["maths","english","Physics","Biology","computer science","Sports"];
let classroom = ["CR-1","CR-2","CR-3","CR-4","CR-5","CR-6"];
let Slot = ["10am-11am","11am-12pm","12pm-1pm","2pm-3pm","3pm-4pm","4pm-5pm"];
var skill = [];
let name = [];
let detail = ["CR" , "10-11" , "MATHS" , "RAM"];

let subj = [];
let details = [];

i=0;
const check = (id)=>{
    if(document.getElementById(id).checked == true){
        skill[i]=id;
        console.log(skill[i]);
        i++;
    }
}

i=0;
const submit = ()=>{
    name[i]=document.getElementById('name').value;
    console.log(name[i]);
    j=1;
    details[0]=name[i];
    skill.forEach((e)=>{
        details[j] = e;
        j++;
    });
    i++;

    
    
subj.push([
    {
        id : 1,
        name : "maths"
    },
    {
        id : 2,
        name : "physics"
    },
    {
        id : 3,
        name : "biology"
    },
    {
        id : 4,
        name : "english"
    },
    {
        id : 5,
        name : "computer science"
    },
    {
        id : 6,
        name : "sports"
    }
]);
    localStorage.setItem("subjects", JSON.stringify(subj));

    localStorage.setItem("details",JSON.stringify(details));

    let subjct = JSON.parse(localStorage.getItem("subjects"));

    classRoom(classroom);
    classSlot(Slot);
    classOptions(subject);

    //schedule(detail);
}

const table = ()=>{
    schedule(detail);
}

const schedule = (details)=>{
    arr = [];
    i=0;
    let options='';
    detail.forEach((e)=>{
        options += `<td>${detail[i]}<br></td>`;
        i++;
    });
    displaySchedule(options);
}

const displaySchedule = (option)=>{
    let records = `<table style="border: solid">
                        <tr>
                        ${option}
                        </tr>`
            document.getElementById('sch').innerHTML = records;
}


const classRoom = (classroom)=>{
    arr = [];
    m=0;
    let class1='';
    classroom.forEach((e)=>{
        class1 += `<option value="">${classroom[m]}</option>`;
        m++;
    });
    display(class1);
}

const classSlot = (Slot)=>{
    arr = [];
    i=0;
    let options='';
    Slot.forEach((e)=>{
        options += `<option value="">${Slot[i]}</option>`;
        i++;
    });
    display1(options);
}

const classOptions = (subject)=>{
    arr = [];
    n=0;
    let options='';
    subject.forEach((e)=>{
        options += `<option value="">${subject[n]}</option>`;
        n++;
    });
    display2(options);
}


const display = (option)=>{
    let records = `classroom : <select id="class">
                        ${option}<br>
                        `
        document.getElementById('classroom').innerHTML = records;
}

const display1 = (option)=>{
    let records = `Slot : <select id="slot">
                        ${option}<br>`
        document.getElementById('slot').innerHTML = records;
}

const display2 = (option)=>{
    let records = `Subject : <select id="subject">
                        ${option}<br>`
        document.getElementById('subject').innerHTML = records;
}
