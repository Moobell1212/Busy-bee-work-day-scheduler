var scheduleTime = $('.time')
var saveButton = $('saveBtn')

console.log(scheduleTime)

// current day displayed at top of calendar
var today = moment().format("Do MMMM YYYY")
$("#today").text(today);

// Should rows be inputted by JQuery?

// better to put time into the rows??
var time = moment();

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i=0; i<hours.length; i++) {
    $("#time").text(hours[i])
}

// make past hours and future colors different



// save input text to local storage

