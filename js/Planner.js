//I want this script to run when the page loads. 
/*
Here is a list of things I want this script to do.
1. The script should pull the month and year from the computer, and set the planner title to (CurrentMonth) Planner (CurrentYear) 
I.e. March Planner 2023 (Complete)
2. The script should move around the weekdays(sunday, monday, tuesday, etc.) To match the current format of the days beneath. 
I.e. if the first day of the month is a tuesday, the items will shift so that tuesday is on the far left, and monday is on the far right (Complete)
3. The script should hide all days that do not exist within a certain month. I.e. February should not have days 29, 30, and 31 shown. (Complete)
4. I want the script to highlight the current day that we are on. Make it a different color than the rest, something noticable but
not standing out completely. 
5. I want to create other scripts for the rest of the features of the planner: Notes and Events
*/

//The first thing I want this script to do is to set month and year of calendar title.
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("titleYear").innerText = currentYear;
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonthInt = currentDate.getMonth();
document.getElementById("titleMonth").innerText = allMonths[currentMonthInt];

//End Script for editing title

//Part 2: Organize weekdays to match format

//Function for findind day name of the first day of the month
function getDayName(dateStr, locale)
{
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}
currentMonthInt++;
let monthNumString = currentMonthInt.toString();
let yearNumString = currentYear.toString();
let dateFormat = monthNumString + '/' + '1' + '/' + yearNumString;
let day = getDayName(dateFormat, "en-US"); //Equal to the day name of the first day of the month

//Based on the variable day, we need to re-order the days on the calendar

//Assign index based on day
let dayToWeekConversion = {"Sunday":1, "Monday":2, "Tuesday":3, "Wednesday":4, "Thursday":5, "Friday":6, "Saturday":7};
let dayIndex = dayToWeekConversion[day];

//Loop through and set order of items
let counter = 0;
let documentName = "";
for(let item in dayToWeekConversion) {
   if (dayToWeekConversion[item] < dayIndex) {
      documentName = "calendar" + item.toString();
      document.getElementById(documentName).style.order = counter + 1;
   } 
   counter++;
}

//End part 2

//Part 3: Do Not include days that are not within a month I.e. do not include 29-31 for february

/*Months with 28 days: February
  Months with 30 days: April, June, September, November
  Months with 31 days: January, March, May, July, August, October, December
*/

if (currentDate.getMonth() == 1) {
   document.getElementById("day29").innerText = ""
   document.getElementById("day30").innerText = ""
   document.getElementById("day31").innerText = ""
} else if (currentDate.getMonth() == 3 || currentDate.getMonth() == 5 || currentDate.getMonth() == 8 || currentDate.getMonth() == 10) {
   document.getElementById("day31").innerText = ""
}
//End part 3.

//Part 4: Highlight the day on the calendar which is the current day
// TODO fix CSS to make it look better
let currentDay = currentDate.getDate();
document.getElementById("day" + currentDay).classList.add("calendarCurrentDay")

//end part 4
