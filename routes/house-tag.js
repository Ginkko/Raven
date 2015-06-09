App.HouseTagRoute = Ember.Route.extend({
  model: function(params) {
    return houseTags.findBy('id', params.house_tag_id);
  }
});
