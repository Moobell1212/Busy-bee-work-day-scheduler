var scheduleTime = $('.time');
var saveButton = $('.saveBtn');
var toDoBox = $('.to-do');
var hours = $('.hour');


// current day displayed at top of calendar
var today = moment().format("Do MMMM YYYY")
$("#today").text(today);   

// better to put time into the rows??
var time = moment().hour();
console.log(time);

for (var i=9; i< 18; i++) {
    var section = $('<section>').addClass('this-hour');
    var hourDiv = $('<div>').addClass('hour');
    var pTimeEl = $('<p>').addClass('time').text(`${i}:00`);
    var toDo = $('<div>').addClass('to-do');
    var textArea = $('<textarea>');
    var savDiv = $('<div>').addClass('save');
    var saveBtn = $('<button>').addClass('saveBtn')
    .on('click', function() {
        

    }
    )
    $('.container').append(section.append(hourDiv.append(pTimeEl), toDo.append(textArea), savDiv.append(saveBtn.append(iClass))));
    var iClass = $('<i>').addClass('fa fa-save');

}

// make past hours and future colors different
function colorTime(){
    if (thatTime < time){
        toDoBox.addClass('.past')
    }
    if (thatTime === time){
        toDoBox.addClass('.present')
    }
    if (thatTime > time){
        toDoBox.addClass('.future')
    }
}

// save input text to local storage
saveButton.on('click', function() {
    alert('Hello World')
}
);
