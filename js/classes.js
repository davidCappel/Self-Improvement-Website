class Event {
    static __eventID = 0;

    constructor(element, reminder) {
        this.element = element
        this.reminder = reminder
        Event.__eventID += 1;
    }
    getDateString() {
        let eventDay = this.element.slice(3);
        let eventMonth = d.getMonth();
        let eventYear = d.getFullYear();
        let dateString = allMonths[eventMonth] + ' ' + eventDay + ', ' + eventYear.toString();
        return dateString;
    }
    getReminder() {
        return this.reminder;
    }
    getCurrentID() {
        return Event.__eventID;
    }
}

class Note {
    static __noteID = 0;

    constructor(noteContent) {
        this.noteContent = noteContent;
        Note.__noteID += 1;
    }
    getNoteContent() {
        return this.noteContent;
    }
    getCurrentID() {
        return Note.__noteID;
    }
}