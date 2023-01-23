// current day displayed at top of calendar
var today = moment().format("Do MMMM YYYY")
$("#today").text(today);

var time = moment().hour();
console.log(time);

for (var i = 9; i < 18; i++) {
    var section = $('<section>').addClass('this-hour').attr('id', i);
    var hourDiv = $('<div>').addClass('hour');
    var pTimeEl = $('<p>').addClass('time').text(`${i}:00`);
    var toDo = $('<div>').addClass('to-do');
    var textArea = $('<textarea>').val(localStorage.getItem(i));
    var savDiv = $('<div>').addClass('save');
    var saveBtn = $('<button>').addClass('saveBtn').attr('id', i)
        .on('click', function () {
            var hourKey = $(this).attr('id');
            var activity = $(this).parent().siblings('.to-do').children().val();
            console.log(activity)
            localStorage.setItem(hourKey, activity)
        }
        )
    var iClass = $('<i>').addClass('fa fa-save');
    $('.container').append(section.append(hourDiv.append(pTimeEl), toDo.append(textArea), savDiv.append(saveBtn.append(iClass))));
    if (i < time) {
        toDo.addClass('past')
    }
    else if (i === time) {
        toDo.addClass('present')
    }
    else {
        toDo.addClass('future')
    }
}


