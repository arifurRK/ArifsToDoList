//declaration
const todoInput=document.querySelector(".todo-input");
const todosubmit=document.querySelector(".todo-submit");
const todolist=document.querySelector(".todo-list");
//eventlistener

todosubmit.addEventListener('click',adding);
todolist.addEventListener('click',deleteCheck);

//functional section

function adding(event){
event.preventDefault();


const todocontainer=document.createElement("div");
const todoItems=document.createElement("li");


todoItems.classList.add("items");
todocontainer.classList.add("todo");
todoItems.innerText=todoInput.value;
todocontainer.appendChild(todoItems);


const completioncheck=document.createElement("button");
const trashcheck=document.createElement("button");

completioncheck.classList.add("cmplt-btn");
completioncheck.innerHTML='<i class="fas fa-check-square"> </i>';
todocontainer.appendChild(completioncheck);

trashcheck.innerHTML='<i class="fas fa-dumpster"></i>';
trashcheck.classList.add("trash-btn");
todocontainer.appendChild(trashcheck);


todolist.appendChild(todocontainer);

todoInput.value=" ";
}


function deleteCheck(e)
{
   const item=e.target;
 if(item.classList[0]==="trash-btn")
 {
const todo=item.parentElement;
todo.classList.add("deleted");
todo.addEventListener('animationend',function() {

    todo.remove();
    
});
 }
 
if(item.classList[0]==="cmplt-btn")
{
const todo=item.parentElement;
todo.classList.toggle("completed");

}
}

