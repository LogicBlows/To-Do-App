



inputValue='';
var divId=0;

/*function getval(Url){
const request = new XMLHttpRequest();
const url="http://localhost:65450/api/Todo_Table";
http.open("GET",url,false);
http.send();
http.onreadystatechange=(e)=>{
  console.log(http.responseText);


var data = JSON.parse(this.response);

if (request.status >= 200 && request.status < 400) {
  data.forEach(movie => {
    console.log(movie.title);
  });
} else {
  console.log('error');
}
}
}
*/

//to display get request

var request = new XMLHttpRequest();
var link ="http://localhost:65450/api/Todo_Table";
request.open('GET', link, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.ID);  // ID's
    });
  } else {
    console.log('error');
  }
}

request.send();
//we are able to access the ID's



var input = document.getElementById("task-input-box");
input.addEventListener("keyup", function(event) { 
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("add-task-button").click();
    }
});


function newElement()
{


  inputValue = document.getElementById("task-input-box").value;
console.log(inputValue);

  if (inputValue === '') 
  {
    alert("You must write something!");

  }
else
{



  var create = document.createElement('div');
create.id=divId;//generated dynamic div ID 
create.className="dynamic-div-class";
create.innerHTML=inputValue +
'<span class="btn-span"> <button onclick="editTask('+divId+')" class="edit-button"><i class="fas fa-edit"></i></button>'+
'<button onclick="delTask('+divId+')" class="del-button"><i class="fa fa-trash"></i></button></span>';
var val= document.createTextNode(inputValue);
document.getElementById("master-div").appendChild(create);

/*makes the box to be empty*/
document.getElementById("task-input-box").value ="";
inputValue='';

divId++;

}
}



function editTask(task_id)
{

var task_val = document.getElementById(task_id).innerHTML;
var splitter = task_val.split("<span");
var used_val= splitter[0];
console.log(used_val);
console.log

document.getElementById("task-input-box").value=used_val;
document.getElementById(task_id).remove();

}


function delTask(task_id)

{

var elem = document.getElementById(task_id);
elem.remove();


}

//date in a date div


var d = new Date();
document.getElementById("dateDiv").innerHTML = d;

//------------------------------------------------------------------------------------//


//focus to change List name


//amazing background//

console.log("Hello World");

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

var mousex = 0;
var mousey = 0;

addEventListener("mousemove", function() {
  mousex = event.clientX;
  mousey = event.clientY;
});


var grav = 0.99;
c.strokeWidth=5;
function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.ceil(Math.random() * 10) / 10 +
    ")"
  );
}

function Ball() {
  this.color = randomColor();
  this.radius = Math.random() * 20 + 14;
  this.startradius = this.radius;
  this.x = Math.random() * (tx - this.radius * 2) + this.radius;
  this.y = Math.random() * (ty - this.radius);
  this.dy = Math.random() * 2;
  this.dx = Math.round((Math.random() - 0.5) * 10);
  this.vel = Math.random() /5;
  this.update = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
    //c.stroke();
  };
}

var bal = [];
for (var i=0; i<50; i++){
    bal.push(new Ball());
}

function animate() {    
  if (tx != window.innerWidth || ty != window.innerHeight) {
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;
  }
  requestAnimationFrame(animate);
  c.clearRect(0, 0, tx, ty);
  for (var i = 0; i < bal.length; i++) {
    bal[i].update();
    bal[i].y += bal[i].dy;
    bal[i].x += bal[i].dx;
    if (bal[i].y + bal[i].radius >= ty) {
      bal[i].dy = -bal[i].dy * grav;
    } else {
      bal[i].dy += bal[i].vel;
    }    
    if(bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0){
        bal[i].dx = -bal[i].dx;
    }
    if(mousex > bal[i].x - 20 && 
      mousex < bal[i].x + 20 &&
      mousey > bal[i].y -50 &&
      mousey < bal[i].y +50 &&
      bal[i].radius < 70){
        //bal[i].x += +1;
        bal[i].radius +=5; 
      } else {
        if(bal[i].radius > bal[i].startradius){
          bal[i].radius += -5;
        }
      }
      
    //forloop end
    }
//animation end
}

animate();

setInterval(function() {
  bal.push(new Ball());
  bal.splice(0, 1);
}, 400);




function changeName()
{

  
}