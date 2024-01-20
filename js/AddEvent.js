//Define variables and objects
const d = new Date();
let doHighlight = false;
let doClick = false;
let currentElement = "";



//function for ensuring users don't enter events for days not possible
function checkDays() {
    let numDays = 31;
    if (d.getMonth() == 1) {
        numDays = 28;
     } else if (d.getMonth() == 3 || d.getMonth() == 5 || d.getMonth() == 8 || d.getMonth() == 10) {
        numDays = 30;
     }
     return numDays;
}

//Function that starts process of creating a new event
function addEvent() {
    let availableDays = checkDays();
    doHighlight = true;
    doClick = true;
    for(let i = 1;i < availableDays + 1;i++) {
        document.getElementById("day" + i.toString()).onmouseenter = function() {addEventMouseOver("day" + i.toString())};
        document.getElementById("day" + i.toString()).onmouseleave = function() {addEventMouseLeave("day" + i.toString())};
        document.getElementById("day" + i.toString()).onclick = function() {addEventMouseClick("day" + i.toString())};
    }
}

//CSS for hovering mouse over day (TODO)
function addEventMouseOver(element) {
    if (doHighlight == true) {
        document.getElementById(element).classList.add("mouseOver");
    }
}

//CSS for moving mouse off element (TODO)
function addEventMouseLeave(element) {
    if (doHighlight == true) {
        document.getElementById(element).classList.remove("mouseOver");
    }
}


/*
On click event function
1. Open HTML form window for user to fill out event information
2. Overwrite previous mouse functions
*/
function addEventMouseClick(element) {
    if (doClick == true) {
        let popupwindow = document.getElementById("popupWindow");
        popupwindow.classList.add("open-window");
        currentElement = element;
        let availableDays = checkDays();
        for(let i = 1;i < availableDays + 1;i++) {
            document.getElementById("day" + i.toString()).onmouseenter = function() {removeMouseHover()};
            document.getElementById("day" + i.toString()).onclick = function() {removeMouseClick("day" + i.toString())};
        }
    }
}

//After day is clicked on, stop mouse hovering effects
function removeMouseHover() {
    doHighlight = false;
}
function removeMouseClick() {
    doClick = false;
}


//Takes data from text-area to create event object
function sendData() {
    let eventDetails = document.getElementById("eventDetails").value;
    document.getElementById("eventDetails").value = ""; //Reset text area
    let popupwindow = document.getElementById("popupWindow");
    popupwindow.classList.remove("open-window");
    const currentEvent = new Event(currentElement, eventDetails);
    writeEvent(currentEvent);
    event.preventDefault();
}


//function to create events visuals in the events column
function writeEvent(event) {
    //Create new elements
    const divElement = document.createElement("div");
    const dateHeader = document.createElement("h3");
    const eventLabel = document.createElement("h4");
    const eventContent = document.createElement("p");
    
    //Set their text equal to date's and reminders
    dateHeader.innerText = event.getDateString();
    eventLabel.innerText = "Event:"
    eventContent.innerText = event.getReminder();

    //Assign class and id
    divElement.setAttribute('class', 'eventHolder');
    divElement.setAttribute('id', "event" + event.getCurrentID().toString());
    eventContent.setAttribute('class', 'eventHolderContent');
    eventContent.setAttribute('id', "eventContent" + event.getCurrentID().toString());

    //Add elements to div element
    divElement.append(dateHeader);
    divElement.append(eventLabel);
    divElement.append(eventContent);
    document.getElementById("eventColumn").append(divElement);
}
//function for cancelling event
function abortEvent() {
    removeMouseHover();
    removeMouseClick();
    let popupwindow = document.getElementById("popupWindow");
    popupwindow.classList.remove("open-window");
    event.preventDefault();
}

//"Main" script in essence
document.getElementById("eventButton").onclick = function() {addEvent()};
document.getElementById("submitBtn").onclick = function() {sendData()};
document.getElementById("closeWindow").onclick = function() {abortEvent()};




