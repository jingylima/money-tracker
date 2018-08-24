//var moneyLeft = prompt('how much do you have now?');
var depo = Number(0); //total
var rep = Number(0); //repeated deductions and salary
var cost;
var planned;
var planAmount = 0;
var planTime;
var planMonth;
var ans = 'yes';


var bankElement = document.getElementById('money');
var introMessage = document.getElementById('intro');
var choices = document.getElementById('categories');
var spcat = document.getElementById('spcat');
var regPayment = document.getElementById('reg');
var types = document.getElementById("type");
var appl = document.getElementById("application");
var timed = document.getElementById("timebomb");
var goal = document.getElementById("big");


//bankElement.innerHTML = moneyLeft;
function rounding(num){
num = num.toPrecision(2);
}

function setMoney(){
  depo += Number(prompt("Tell us how much you have and we'll do the budgeting for you?"));
bankElement.innerHTML = "You are allowed to spend " + depo + " this month."
}

function button1(){
 choices.innerHTML= '<div class = "text"> Tell us what you have spent on. </div>'+
   '<div class="buttonsWrapper"><button onclick="onetime()"> Groceries</button></div>'+
   '<div class="buttonsWrapper"><button onclick="onetime()"> Transportation</button></div>'+
   '<div class="buttonsWrapper"><button onclick="onetime()"> Luxury</button></div>'+
   '<div class="buttonsWrapper"><button onclick="onetime()"> Restaurants</button></div>'+
   '<div class="buttonsWrapper"><button onclick="onetime()"> Personal Care</button></div>'+
   '<div class="buttonsWrapper"><button onclick="onetime()"> Other</button></div>';
  
    types.style.display = "none";
        regPayment.style.display = "none";  
    choices.style.display = "block";
}

function regular(){
  regPayment.innerHTML = '<div class = "text" > Regular payment. </div>' +
  '<div class="buttonsWrapper"><button onclick="repeat()"> Bills and Utilities</button></div>'+
   '<div class="buttonsWrapper"><button onclick="repeat()"> Taxes </button></div>'+
    '<div class="buttonsWrapper"><button onclick="repeat()">Rent </button></div>' +
    '<div class="buttonsWrapper"><button onclick="repeat()"> Other </button></div>';
        regPayment.style.display = "block";
  choices.style.display = "none";
  types.style.display = "none";
}

function bigThing(){
 // rep -= Number(planMonth);
 // depo += Number(planMonth);
  planned = prompt('What are you planning to save up for?');
  planAmount = Number(prompt('How much will you need for your ' + planned +'?'));
  planTime = Number(prompt('In how many months will you need the $' + planAmount + ' for your ' + planned + '?'));
  planMonth = (Number(planAmount/planTime)).toFixed(2);
  
  goal.innerHTML = "Working towards your " + planned + "! We will make sure that you will set aside $" + Number(planMonth) +" every month.";
  depo -= Number(planMonth);
  rep += Number(planMonth);
  
  rep = Number(rep.toFixed(2));
  depo = Number(depo.toFixed(2));
  
  bankElement.innerHTML = "You have " + depo + " left now.";
    if(rep > 0){
    timed.innerHTML =  "$" +rep + " will be deducted at the end of the month.";
    }else{
    timed.innerHTML = 'You saved $' + (-1*rep) + ', and we will update your savings at the end of the month.';
  }
}

function createUser(){
introMessage.innerHTML = '<br>Hello, '+ prompt('what is your name?') +
'<br><br><div class="buttonsWrapper"><button onclick = "bigThing()"> Change Plan </button></div> '+
  '<div class="buttonsWrapper"> <button onclick="button1()">Record a Purchase</button></div>'+
  ' <div class="buttonsWrapper"><button onclick = "regular()">Record a Regular Payment </button></div> '+
  '<div class="buttonsWrapper"><button onclick = "setMoney()">Make a Deposit </button></div> '+
  '<div class="buttonsWrapper"><button onclick = "salary()">Set Up a Salary </button></div> <br><br>' ;
  depo = rep = Number(0);
  bankElement.innerHTML = "You currently have $" + depo + " dollars."
  timed.innerHTML = "";
  salary();
  bigThing();
}

function onetime(){
cost = Number(prompt("How much does it cost?"));
  if( cost > (5 / 100 * depo))
  ans = prompt("Are you sure you want to spend?")
  if(ans === 'yes'){
     depo -= cost;
  bankElement.innerHTML = "You have $" + depo + " left now."
  }
}

function repeat(){
  rep += Number(prompt("Tell us your expenses this month!"));
  if(rep > 0){
  timed.innerHTML =  "$" + rep + " will be deducted at the end of the month.";
  }else{
  timed.innerHTML = 'You saved $' + (-1*rep) + ', and we will update your savings at the end of the month.';
  }
}

function nextMonth(){
  depo = depo - rep;
  bankElement.innerHTML = "You have $" + depo + " left."
}

function salary(){
rep -= Number(prompt("Monthly Salary: "));
if(rep > 0){
timed.innerHTML =  "$" +rep + " will be deducted at the end of the month.";
}else{
  timed.innerHTML = 'You saved $' + (-1*rep) + ', and we will update your savings at the end of the month.';
  }
  depo -= rep;
}