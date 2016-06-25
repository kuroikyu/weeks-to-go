// Document ready
$(function() {

    // Go through all rows and columns up to my age
    for (var fYear = 1; fYear < years; fYear++) {

        for (var fDay = 1; fDay <= 52; fDay++) {

            // Make the delay increment itself to make it look like a trail
            incrementDelay();
            // Set the timeout to add the classes to the td to make the colour change
            doSetTimeout(fYear, fDay, delay);
        }
    }

    // Do the same but for the remaining weeks of the current year
    for (var fDay = 1; fDay <= remainingWeeks; fDay++) {

        incrementDelay();
        doSetTimeout(fYear, fDay, delay);

        // Add class current to current week to highlight it
        if (fDay == remainingWeeks) {

            // Increment the delay to make the animation consistent
            incrementDelay();

            // Add the class to the apropiate td
            setTimeout(function() {
                $('tbody').children('tr:nth-child(' + fYear + ')').children('td:nth-child(' + fDay + ')').addClass('current');
            }, delay);
        }
    }
});

// Starting dates. Today and my date of birth
var dateToday = new Date();
var dateBorn = new Date("1989-05-29");

// Calculate difference in weeks between both dates
var totalWeeks = Math.round((dateToday - dateBorn) / 604800000);

// Calculate how many years
var years = Math.floor(totalWeeks / 52);

// And how many extra weeks left from those years
var remainingWeeks = totalWeeks % 52;

// Initialise delay variable
var delay = 0;

// Simple function to control the speed of the animation in miliseconds
function incrementDelay() {
    delay += 5;
}

// Core function to assign the classes that make the animation
function doSetTimeout(row, column, delay) {

    // lived class will paint black all the td's that are between my birthday and today
    setTimeout(function() {
        $('tbody').children('tr:nth-child(' + row + ')').children('td:nth-child(' + column + ')').addClass('lived');
    }, delay);

    // Current will highlight the td making the animation start with the highlight colour
    setTimeout(function() {
        $('tbody').children('tr:nth-child(' + row + ')').children('td:nth-child(' + column + ')').addClass('current');
    }, delay);

    // Removing the current class a few miliseconds after will make it animate as if it was a trail
    setTimeout(function() {
        $('tbody').children('tr:nth-child(' + row + ')').children('td:nth-child(' + column + ')').removeClass('current');
    }, delay + 75);
}
