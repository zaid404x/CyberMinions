let threatCount = 0;
let alertCount = 0;

const threatElement = document.getElementById("threats");
const alertElement = document.getElementById("alerts");

const threatInterval = setInterval(() => {
    threatCount++;
    threatElement.innerText = threatCount;

    if(threatCount >= 245){
        clearInterval(threatInterval);
    }
}, 15);

const alertInterval = setInterval(() => {
    alertCount++;
    alertElement.innerText = alertCount;

    if(alertCount >= 12){
        clearInterval(alertInterval);
    }
}, 100);
