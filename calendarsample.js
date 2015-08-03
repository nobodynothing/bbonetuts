var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var Month = function() {
 function daysInMonth(year,month) {
   return new Date(year, month+1, 0).getDate();
 } console.log("testing daysInMonth");
//represents the last day of the month, not total number of days

 this.currDate = new Date();
 this.currMonth = this.currDate.getMonth();
 this.currYear = this.currDate.getFullYear();
 console.log("current month");
 console.log(this.currMonth);
 console.log(this.currYear);
 //vars to give current month and year// 5 & 2015 // +1 = 1-index

 this.numOfDays = daysInMonth(this.currYear, this.currMonth);
 console.log("testing numOfDays");
 console.log(this.numOfDays);

 // this.getWeekday = function(num) {
 //   var date = new Date(this.year, this.month-1, num);
 //   var weekdayNum = date.getDay(); //getDay() is an integer corresponding to the day of the week: 0 for Sun, 1 for Mon, etc.
 //   return dayNames[weekdayNum];
 // }
}

 // var june = new Month(6, 2015);
 // june.numOfDays;//31
 // june.getWeekday(14);

Month.prototype.generateHTML = function() {

 var firstDay = new Date(this.currYear, this.currMonth, 1);
 var startingDay = firstDay.getDay(); // starting day is 1=Mon
 console.log('testing startingDay');
 console.log(startingDay);

 //header with days of the week
 var html = '<table class="cal-table">';
 html += '<tr><th colspan="7">';
 html += '</th></tr>';
 html += '<tr class = "cal-header">';
  for (i=0; i<=6; i++) {
   html += '<td class="cal-header-day">';
   html += dayNames[i];
   html += '</td>';
  }
 html += '</tr><tr>';

 //fills in the dates
 var day = 1;
 //iterates thru each week - row
 for (var i =0; i<6; i++) {
   //iterates thru each weekday - columns
   for (var j=0; j<7; j++) {
     console.log("hello");
     console.log(this.numOfDays);
     html += '<td class="cal-day">';
     if (day <= this.numOfDays && (i>0 || j>=startingDay)) {
       html += day;
       day++;
       console.log(day);
       //console.log(numOfDays);
     }
     html += '</td>';
   }
   //if statement for i loop
   if (day > this.numOfDays) {
     break;
   } else {
     html += '</tr><tr>';
   }
 }
 html += '</tr></table>';
 this.html = html;
}

Month.prototype.getHTML = function() {
 return this.html;
}
