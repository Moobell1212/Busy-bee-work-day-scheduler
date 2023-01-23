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
    var section = $('<section>').addClass('this-hour').attr('id', i);
    var hourDiv = $('<div>').addClass('hour');
    var pTimeEl = $('<p>').addClass('time').text(`${i}:00`);
    var toDo = $('<div>').addClass('to-do');
    var textArea = $('<textarea>');
    var savDiv = $('<div>').addClass('save');
    var saveBtn = $('<button>').addClass('saveBtn').attr('id', i)
    .on('click', function() {
        var hourKey = $(this).attr('id');
        var activity = $(this).parent().siblings('.to-do').children().val();
        console.log(activity)
        localStorage.setItem(hourKey, activity)
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

