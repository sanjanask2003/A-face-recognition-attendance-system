/*
    const div = document.createElement('div')
div.className = 'main'
    const addText = document.createTextNode("Chai aur Code");
    div.appendChild(addText);
    function addHTML () {
        div.innerHTML = `<div class="context-menu">
                <ul>
                    <li onclick="editTask()" class="edit">Edit</li>
                    <li onclick="deleteTask()" class="delete">Delete</li>
                </ul>
            </div>`
    }
   // div.innerText = 'Chai aur Code';
   // console.log(div); 
   //console.log(animationTimeline.currentTime);
   //document.body.appendChild(div);
   
//const now = new Date();

console.log(now.toLocaleTimeString()); // Current time
console.log(now.toLocaleDateString()); // Current date
const da = document.createTextNode(now.toLocaleTimeString(),now.toLocaleDateString())
document.querySelector('.da').innerHTML = da 

const now = new Date();
const time = now.toLocaleTimeString(); // This is just a string

// Create a new element to hold the time
const timeElement = document.createElement("span");
timeElement.textContent = time;               // Set the text
timeElement.className = "time_class";         // Add class

// Append it to an existing element with class "da"
document.querySelector(".da").appendChild(timeElement);

// Optional: log to see what's appended
console.log(timeElement);

 
const timeDiv = document.createElement("div");
    timeDiv.id = "timeDayDisplay";
    timeDiv.style.fontSize = "24px";
    timeDiv.style.fontFamily = "Arial, sans-serif";
    document.body.appendChild(timeDiv);

    // Get current time and day once
    const now = new Date();
    const time = now.toLocaleTimeString();

    // Set the content of the div
    timeDiv.textContent = `time is ${time}`; */


// Get the current day name (e.g., Sunday, Monday, etc.)
/* const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = days[now.getDay()];
console.log(currentDay); */

function saved () {
    let key = prompt("Enter color");
let value = prompt("Enter value")

localStorage.setItem(key, value);

console.log(`key is ${key}, value is ${localStorage.getItem(value)}`);
}