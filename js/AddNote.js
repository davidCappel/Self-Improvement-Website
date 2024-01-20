//function that opens the window
function addNote() {
    let notesWindow = document.getElementById("popupWindowNotes");
    notesWindow.classList.add("open-window");
}

//function for taking the data from the box and putting it into a notes object
function sendNotesData() {
    let notesDetails = document.getElementById("notesDetails").value;
    document.getElementById("notesDetails").value = ""; //Empty text area input
    let popupWindowNotes = document.getElementById("popupWindowNotes");
    popupWindowNotes.classList.remove("open-window");
    const currentNote = new Note(notesDetails);
    writeNote(currentNote);
    event.preventDefault();
}


//function for adding the elements to the webpage for note objects
function writeNote(note) {
    //Create new elements
    const divElementNote = document.createElement("div");
    const noteLabel = document.createElement("h4");
    const noteContent = document.createElement("p");
    
    //Set their text equal to date's and reminders
    noteLabel.innerText = "Note:"
    noteContent.innerText = note.getNoteContent();

    //Assign class and id
    divElementNote.setAttribute('class', 'eventHolder');
    divElementNote.setAttribute('id', "note" + note.getCurrentID().toString());
    noteContent.setAttribute('class', 'eventHolderContent');
    noteContent.setAttribute('id', "noteContent" + note.getCurrentID().toString());

    //Add elements to div element
    divElementNote.append(noteLabel);
    divElementNote.append(noteContent);
    document.getElementById("notesColumn").append(divElementNote);
}

//function to abort the note functionality
function abortNote() {
    let popupwindow = document.getElementById("popupWindowNotes");
    popupwindow.classList.remove("open-window");
    event.preventDefault();
}


document.getElementById("submitBtnNotes").onclick = function() {sendNotesData()};
document.getElementById("notesButton").onclick = function() {addNote()};
document.getElementById("closeWindowNotes").onclick = function() {abortNote()};
