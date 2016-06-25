// Document ready
$( function() {
  years = getYears( dateBorn );
  remainingWeeks = getWeeks( dateBorn );

  // Go through all rows and columns up to my age
  for ( var fYear = 1; fYear < years; fYear++ ) {

    for ( var fDay = 1; fDay <= 52; fDay++ ) {

      // Make the delay increment itself to make it look like a trail
      incrementDelay();
      // Set the timeout to add the classes to the td to make the colour change
      doSetTimeout( fYear, fDay, delay );
    }
  }

  // Do the same but for the remaining weeks of the current year
  for ( var fDay = 1; fDay <= remainingWeeks; fDay++ ) {

    incrementDelay();
    doSetTimeout( fYear, fDay, delay );

    // Add class current to current week to highlight it
    if ( fDay == remainingWeeks ) {

      // Increment the delay to make the animation consistent
      incrementDelay();

      // Add the class to the apropiate td
      setTimeout( function() {
        $( 'tbody' ).children( 'tr:nth-child(' + years + ')' ).children( 'td:nth-child(' + remainingWeeks + ')' ).addClass( 'current' );
      }, delay );
    }
  }
} );

// Starting dates. Today and my date of birth
var dateToday = new Date();
var dateBorn = new Date( "1989-05-29" );

// Calculate difference in weeks between both dates
var years = 0;
var remainingWeeks = 0;
var delay = 0;

// Simple function to control the speed of the animation in miliseconds
function incrementDelay() {
  delay += 5;
}

// Calculate how many years
function getYears( dateString ) {
  var today = new Date();
  var birthDate = new Date( dateString );
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if ( m < 0 || ( m === 0 && today.getDate() < birthDate.getDate() ) ) {
    age--;
  }
  return age;
}


// And how many extra weeks left from those years
function getWeeks( dateString ) {
  var birthDate = new Date( dateString );
  var currentBirthDay = new Date( dateString );
  currentBirthDay.setFullYear( dateToday.getFullYear() );

  var dateDiff = ( dateToday - currentBirthDay ) / ( 1000 * 60 * 60 * 24 * 7 );

  if ( dateDiff < 0 ) {
    currentBirthDay.setFullYear( currentBirthDay.getFullYear() - 1 );
  }

  var weeks = Math.ceil( ( dateToday - currentBirthDay ) / ( 1000 * 60 * 60 * 24 * 7 ) );

  if ( weeks > 52 ) {
    weeks = 52;
  }
  return weeks;
}

// Core function to assign the classes that make the animation
function doSetTimeout( row, column, delay ) {

  // lived class will paint black all the td's that are between my birthday and today
  setTimeout( function() {
    $( 'tbody' ).children( 'tr:nth-child(' + row + ')' ).children( 'td:nth-child(' + column + ')' ).addClass( 'lived' );
  }, delay );

  // Current will highlight the td making the animation start with the highlight colour
  setTimeout( function() {
    $( 'tbody' ).children( 'tr:nth-child(' + row + ')' ).children( 'td:nth-child(' + column + ')' ).addClass( 'trail' );
  }, delay );

  // Removing the current class a few miliseconds after will make it animate as if it was a trail
  setTimeout( function() {
    $( 'tbody' ).children( 'tr:nth-child(' + row + ')' ).children( 'td:nth-child(' + column + ')' ).removeClass( 'trail' );
  }, delay + 75 );
}
