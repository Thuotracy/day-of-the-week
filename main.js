let output = document.getElementById('output');
let date = document.getElementById('date');

let d = new Date();
let day = d.getDay();
let ndate = d.toLocaleString();

switch (day){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break; 
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        }

output.innerHTML = day;     
date.innerHTML = ndate;