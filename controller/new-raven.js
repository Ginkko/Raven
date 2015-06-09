App.NewRavenController = Ember.ObjectController.extend({

  var raven = {
    id: 6,
    userName: "",
    text: "",
    houseTags: []
  };

  ravens.addObject(raven);

  actions: {
    saveRaven: function() {
      this.transitionToRoute('ravens');
    }
  }
});
