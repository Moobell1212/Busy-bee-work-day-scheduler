// current day displayed at top of calendar
var today = moment().format("Do MMMM YYYY");
$("#today").text(today);

// variable to provide the current hour when the website is running
var time = moment().hour();
console.log(time);

// looping for every hour wanted on the website
for (var i = 9; i < 18; i++) {
    // creating variables to input for every hour on the website
    // attribute added to section to use later for local storage
    var section = $('<section>').addClass('this-hour').attr('id', i);
    var hourDiv = $('<div>').addClass('hour');
    // text added to the p element in the hour div
    var pTimeEl = $('<p>').addClass('time').text(`${i}:00`);
    var toDo = $('<div>').addClass('to-do');
    // value in the local storage is added to the textarea
    var textArea = $('<textarea>').val(localStorage.getItem(i));
    var savDiv = $('<div>').addClass('save');
    var saveBtn = $('<button>').addClass('saveBtn').attr('id', i)
    // click listener on the save button for when the user saves the input for an hour
        .on('click', function () {
        var hourKey = $(this).attr('id');
        var activity = $(this).parent().siblings('.to-do').children().val();
        // console.log(activity)
        localStorage.setItem(hourKey, activity);
    }
    );
    var iClass = $('<i>').addClass('fa fa-save');
    // appending all divs etc. into the section container to build rows for each hour
    $('.container').append(section.append(hourDiv.append(pTimeEl), toDo.append(textArea), savDiv.append(saveBtn.append(iClass))));
    // if loop to change colour for if the row hour is before, the same as, or after the current hour
    if (i < time) {
        toDo.addClass('past');
    }
    else if (i === time) {
        toDo.addClass('present');
    }
    else {
        toDo.addClass('future');
    }
}


