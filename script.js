var scheduleTime = $('.time')
var saveButton = $('.saveBtn')
var toDoBox = $('.to-do')


// current day displayed at top of calendar
var today = moment().format("Do MMMM YYYY")
$("#today").text(today);

// Should rows be inputted by JQuery?

// better to put time into the rows??
var time = moment().hour();
console.log(time)

var hours = [09, 10, 11, 12, 13, 14, 15, 16, 17];

// for (let i=0; i<hours.length; i++) {
//     $(".time").each(function()
//     )
// }

// make past hours and future colors different
function colorTime(){
    if (hours > time){
        toDoBox.addClass('.past')
    }
    if (hours === time){
        toDoBox.addClass('.present')
    }
    if (hours < future){
        toDoBox.addClass('.future')
    }
}


// save input text to local storage
saveButton.on('click', function() {
    alert('Hello World')
}
);
