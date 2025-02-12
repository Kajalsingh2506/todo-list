const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button"); // Removed onclick attribute


addButton.addEventListener("click", addTask); // Ensure event listener is set up correctly


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(document.createTextNode(inputBox.value));
        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = '';
        saveData();
    }
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI" && e.target.children.length > 0){
        e.target.classList.toggle("checked");
        spaceData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
