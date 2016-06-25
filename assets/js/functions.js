$(function() {
    for (var fYear = 1; fYear < years; fYear++) {
        for (var fDay = 1; fDay <= 52; fDay++) {
            incrementDelay();
            doSetTimeout(fYear, fDay, delay);
        }
    }

    for (var fDay = 1; fDay <= remainingWeeks; fDay++) {
        incrementDelay();
        doSetTimeout(fYear, fDay, delay);

        if (fDay == remainingWeeks) {
            incrementDelay();
            setTimeout(function() {
                $('tbody').children('tr:nth-child(' + fYear + ')').children('td:nth-child(' + fDay + ')').addClass('current');
            }, delay);
        }
    }

});

var dateToday = new Date();
var dateBorn = new Date("1989-05-29");
var totalWeeks = Math.round((dateToday - dateBorn) / 604800000);
var years = Math.floor(totalWeeks / 52);
var remainingWeeks = totalWeeks % 52;
var delay = 0;

function incrementDelay() {
    delay += 5;
}

function doSetTimeout(row, column, delay) {
    setTimeout(function() {
        $('tbody').children('tr:nth-child(' + row + ')').children('td:nth-child(' + column + ')').addClass('lived').toggleClass('current').delay(20).toggleClass('current');
    }, delay);
}
