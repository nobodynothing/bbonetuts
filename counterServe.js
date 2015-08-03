
$(document).ready( function () {

    var Counter = Backbone.Model.extend({
        defaults : {"value" : 0},
        urlRoot : "/counter"
    });

    var Refresh = Backbone.Model.extend({
        defaults : {"value" : 0},
        urlRoot : "/refresh"
    });

    var counterModel1 = new Counter({id : 1});
    var refreshModel1 = new Refresh({id : 2});

    Counter.prototype.inc = function () {
        var val = this.get("value");
        this.set("value", val+1);
        this.save();
    }

    Counter.prototype.dec = function () {
        var val = this.get("value");
        this.set("value", val-1);
        this.save();
    }
    counterModel1.fetch();

var FetchView = Backbone.View.extend({
        render: function () {
            this.$el.html('<p>' + 'sync event sucess!' + '</p>');
        },
        initialize: function () {

            this.listenTo(counterModel1, "sync", this.render);
        },
});

var CounterView = Backbone.View.extend({
        render: function () {
            var val = this.model.get("value");
            var btn = '<button id="increment">Increment</button>';
            var btn2 = '<button id="decrement">Decrement</button>'
            this.$el.html('<p>'+val+'</p>' + btn + btn2);

        },
        initialize: function () {
            this.model.on("change", this.render, this);

        },
        events : {
            'click #increment' : 'increment',
            'click #decrement' : 'decrement'
        },
        increment : function () {
            this.model.inc();
        },
        decrement : function () {
            this.model.dec();
        },
    });


    var counterView1 = new CounterView({model : counterModel1});
    var fetchView = new FetchView({model: refreshModel1});

    counterView1.render();
    fetchView.render();

    $("#counterdiv").append(counterView1.$el);
    $("#fetchdiv").append(fetchView.$el);
});
