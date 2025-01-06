const i =document.getElementById("input-box");
const l =document.getElementById("listcontainer");

function addTask()
{
if(i.value ==='')
{
    alert("u must write something");
}
else{
    let li=document.createElement("li");
    li.innerHTML=i.value;
    l.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    
}
i.value="";
saveData();
}
l.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
    }
} , false);

function saveData()
{
    localStorage.setItem("data",l.innerHTML);
}


