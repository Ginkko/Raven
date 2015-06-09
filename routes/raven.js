App.RavenRoute = Ember.Route.extend({
  model: function(params){
    return ravens.findBy('id', params.raven_id);

  }
});
