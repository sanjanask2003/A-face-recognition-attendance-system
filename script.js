let dragCard = null;
let rightClickCard = null;
function addtask(columnId){
    const input= document.getElementById(`${columnId}-input`)
    //console.log(input)
    const taskText = input.value;
    //console.log(taskText);
    if(taskText===""){
        return
    }
    const taskElement = createAddTask(taskText, columnId);
    document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
    updateListCount(columnId);
    input.value = "";
    
}

function createAddTask(textText, columnId){
    const element = document.createElement("div")
    element.textContent = textText;
    element.classList.add("card");
    //element.id = columnId;
    //element.setAttribute("draggable", true)
    element.draggable = true;
    element.addEventListener("dragstart", dragStart);
    element.addEventListener("dragend", dragEnd);
    element.addEventListener("contextmenu",function (event) {
        event.preventDefault();
        rightClickCard = this
        showContextMenu(event.pageX, event.pageY);
    })
    // set current time and date
    const now = new Date();
    const time = now.toLocaleTimeString(); 
    const day = now.toLocaleDateString();
    const timeElement = document.createElement("span");
    timeElement.textContent = `${time}, ${day}`;
    timeElement.className = "time_class";      
    element.appendChild(timeElement);
    return element;
}

function dragStart() {
    this.classList.add("dragging")
    dragCard = this;
}
function dragEnd() {
    dragOut = this
    this.classList.remove("dragging")
    ['todo', "doing", "done"].forEach((columnId) => {
        updateListCount(columnId);
    })
}
const columns = document.querySelectorAll(".tasks");
columns.forEach((column)=>{
    column.addEventListener("dragover", dragOver)
})
function dragOver(event){
    event.preventDefault();
    
    if (!dragCard || this.contains(dragCard)) return;

    const sourceColumnId = dragCard.parentElement.id.replace('-tasks', '');
    this.appendChild(dragCard);

    const targetColumnId = this.id.replace('-tasks', '');
    
    updateListCount(sourceColumnId);  // old column
    updateListCount(targetColumnId);  // new column
}


const contextmenu = document.querySelector('.context-menu');
function showContextMenu(x, y){
    contextmenu.style.left = `${x}px`;
    contextmenu.style.top = `${y}px`;
    contextmenu.style.display = "block";
}

function editTask() {
    contextmenu.style.display = 'none';
     if(rightClickCard!==null){
        const newTaskText = prompt("Edit Task - ",rightClickCard.textContent);
        if(newTaskText !== ""){
            rightClickCard.textContent = newTaskText;
        }
     }
}

function deleteTask () {
    contextmenu.style.display = 'none';
    if(rightClickCard!==null){
        const columnId = rightClickCard.parentElement.id.replace('-tasks', );
        rightClickCard.remove();
        updateListCount(columnId);
    }
    //document.querySelector()
}

function updateListCount(columnId) {
    const count = document.querySelectorAll(`#${columnId}-tasks .card`).length;
    localStorage.setItem(`${columnId}-count`, count);  // store with unique key
    document.getElementById(`${columnId}-count`).textContent = count;  // update display
}

function savedToLocal () {

}
