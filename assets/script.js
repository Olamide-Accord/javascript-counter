const lowerBtn = document.getElementById("lowerBtn");
const addBtn = document.getElementById("addBtn")
let displayCounter = document.querySelector("p");
let count = 0;
updateDisplay();


lowerBtn.addEventListener("click", () =>{
    if(displayCounter.innerHTML > 0 && displayCounter.innerHTML <= 50){
        count--;
        updateDisplay();
    }
    
});

addBtn.addEventListener("click", () => {
    if(displayCounter.innerHTML >= 0 && displayCounter.innerHTML < 50) {
        count++;
        updateDisplay();
    }
    
});

function updateDisplay() {
    displayCounter.innerHTML = count;  
}

