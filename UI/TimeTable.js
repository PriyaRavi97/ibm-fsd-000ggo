let trainer = [];
let i = 0;
let subject = ["-select-","maths","english","Physics","Biology","computer science","Sports"];
let classroom = ["-select-","CR-1","CR-2","CR-3","CR-4","CR-5","CR-6"];
let slot = ["-select-","10am-11am","11am-12pm","12pm-1pm","2pm-3pm","3pm-4pm","4pm-5pm"];
let train = ["-select-","Ram"];
var skill = [];
let name = [];

let subj = [];
let cr = [];
let Slt = [];

let details = [];

i=0;

//let sch = new ScheduleTable();
const check = (id)=>{
    if(document.getElementById(id).checked == true){
        skill[i]=id;
        i++;
    }
}

i=0;
const submit = ()=>{
    name[i]=document.getElementById('name').value;
    //details = JSON.parse(localStorage.getItem("details"));
    
    j=1;
    details[0]=name[i];
    skill.forEach((e)=>{
        details[j] = e;
        j++;
    });

    i++;

    localStorage.setItem("details",JSON.stringify(details));
    
subj.push([
    {
        //id : 1,
        name : "maths"
    },
    {
      //  id : 2,
        name : "physics"
    },
    {
       // id : 3,
        name : "biology"
    },
    {
      //  id : 4,
        name : "english"
    },
    {
      //  id : 5,
        name : "computer science"
    },
    {
      //  id : 6,
        name : "sports"
    }
]);

cr.push([
    {name : "CR-1"},
    {name : "CR-2"},
    {name : "CR-3"},
    {name : "CR-4"},
    {name : "CR-5"},
    {name : "CR-6"},
]);

Slt.push([
    {name : "10am-11am"},
    {name : "11am-12pm"},
    {name : "12pm-1pm"},
    {name : "2pm-3pm"},
    {name : "3pm-4pm"},
    {name : "4pm-5pm"}
]);

//storing to local storage
    localStorage.setItem("subjects", JSON.stringify(subj));
    localStorage.setItem("classrooms", JSON.stringify(cr));
    localStorage.setItem("slot", JSON.stringify(Slt));

    //getting from the local storage
    let subjct = JSON.parse(localStorage.getItem("subjects"));
    let classRoom = JSON.parse(localStorage.getItem("classrooms"));
    let Slot = JSON.parse(localStorage.getItem("slot"));
    let tr = JSON.parse(localStorage.getItem("details"));

    console.log("hi");
    console.log(subjct);
   //    console.log(subj.name);

   //calling the display function
    CRoom(classroom);
    classSlot(slot);
    classOptions(subject);
    classtrain(train);
}

const CRoom = (classroom)=>{
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

const classtrain = (trainer)=>{
    arr = [];
    m=0;
    let class1='';
    trainer.forEach((e)=>{
        class1 += `<option value="">${trainer[m]}</option>`;
        m++;
    });
    display3(class1);
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
                        ${option}`
        document.getElementById('subject').innerHTML = records;
}

const display3 = (option)=>{
    let records = `Trainer : <select id="trainer">
                        ${option}`
        document.getElementById('trainer').innerHTML = records;
}

const table = ()=>{
    schedule(details);
}

const schedule = (details)=>{
    arr = [];
    i=0;
    let options='';
    
    let tr = JSON.parse(localStorage.getItem("details"));
    options = `<td>${tr[0]}</td>`;
    displaySchedule(options);
}

const displaySchedule = (option)=>{
    let records = `<table style="border: solid">
                        <tr>
                        ${option}
                        </tr>`
            document.getElementById('sch').innerHTML = records;
}

