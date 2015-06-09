App.RavensRoute = Ember.Route.extend({


  model: function() {
    return ravens.reverse();
  }
});
