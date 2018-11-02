inputValue='';
var divId=0;

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
create.innerHTML=inputValue +'<span class="btn-span"> <button onclick="editTask('+divId+')" class="edit-button"><i class="far fa-edit"></i></button>'+
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

document.getElementById("task-input-box").value=used_val;
document.getElementById(task_id).remove();

}


function delTask(task_id)

{

var elem = document.getElementById(task_id);
elem.remove();


}


var d = new Date();
document.getElementById("dateDiv").innerHTML = d;

