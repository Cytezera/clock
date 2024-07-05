var second = 0; 
var min = 0; 
var hour = 0; 
function updateClock(){
    const now = new Date();
    second = now.getSeconds().toString().padStart(2,"0");
    min = now.getMinutes().toString().padStart(2,"0");
    hour = now.getHours().toString().padStart(2,"0");
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hour}:${min}:${second}`;

}

setInterval(updateClock,1000);
updateClock();
