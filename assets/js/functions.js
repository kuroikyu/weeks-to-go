// $(function(){
//
// });

var dateToday = new Date();
var dateBorn = new Date("2015-05-29");
var totalWeeks = Math.round((dateToday - dateBorn) / 604800000);
var years = Math.floor(totalWeeks / 52);
var remainingWeeks = totalWeeks % 52;
var delay = 0;

console.log(totalWeeks);
console.log(years);
console.log(remainingWeeks);


$('tbody').children('tr:nth-child(' + years + ')').children('td:nth-child(' + remainingWeeks + ')').addClass('current')

for (var fYear = 1; fYear < years - 1; fYear++) {
  console.log('delay ' + delay);
  
    for (var fDay = 1; fDay <= 52; fDay++) {
        delay += 1000;
        console.log('delay ' + delay);
        // setTimeout(setLived(fYear, fDay), delay);
        setTimeout(console.log(1), delay);

    }
}
function setLived(row, column) {
  $('tbody').children('tr:nth-child(' + row + ')').children('td:nth-child(' + column + ')').addClass('lived')
}

setLived(55, 12);


var explode = function(){
  alert("Boom!");
};
// setTimeout(explode, 2000);
setTimeout(console.log('Test'), 1000);
