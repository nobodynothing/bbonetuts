var DayModel = Backbone.Model.extend ({
    urlRoot : '/calendarDay',
    daysInMonth : function(year,month) {
       return new Date(year, month+1, 0).getDate();
     },
     dates : {
     this.currDate : new Date(),
     this.currMonth : this.currDate.getMonth(),
     this.currYear : this.currDate.getFullYear(),
     },
     this.numOfDays : daysInMonth(this.currYear, this.currMonth);

    }
  })


var currentDate = new Date();
var curMonth = currentDate.getMonth();
var curYear = currentDate.getFullYear();
//find way to get current date from server

var numOfDays = daysInMonth();
