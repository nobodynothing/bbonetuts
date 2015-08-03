
var Counter = Backbone.Model.extend({
   defaults : {"value" : 0}
});

var CounterView = Backbone.View.extend({
   render: function () {
       var val = this.model.get("value");
       var btn1 = '<button id="b1">Increment</button>';
       if (val >= 1) {
           var btn2 = '<button id="b2">Decrement</button>';
       }
       else {
           var btn2 = "";
       };
       if (val >= 1) {
       var reset = '<button id="reset">Reset</button>';
       }
       else {
           var reset = "";
       };
       this.$el.html('<p>'+val+'</p>' + btn1 + btn2 + reset);
   }
});

var counterView, counterModel;

$(document).ready( function () {

   counterModel = new Counter();

   counterView = new CounterView({model : counterModel});
   counterView.render();

   counterModel.on("change", function () {
   counterView.render();
});

counterView.$el.on("click","#b1", function () {
   var mod = counterView.model;
   var currVal = mod.get("value");
   mod.set("value",currVal+1);
});

counterView.$el.on("click","#b2", function () {
   var mod = counterView.model;
   var currVal = mod.get("value");
   if (currVal !== 0) {
       mod.set("value",currVal-1);
   }
});

counterView.$el.on("click","#reset", function () {
   var mod = counterView.model;
   var currVal = mod.get("value");
   mod.set("value",currVal = 0);
});

$("#counterdiv").append(counterView.$el);
});
