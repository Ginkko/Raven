App.NewRavenController = Ember.Controller.extend({
  messageError: false,
  raven: {
    id: ravens.length.toString(),
    userName: "",
    text: "",
    houseTags: [],
    parentRaven: undefined
  },

  actions: {
    saveRaven: function() {
      if (this.raven.text.length > 141) {
        this.set('messageError', true);
      } else {
        ravens.addObject(this.raven);
        this.transitionToRoute('ravens');
      }
    }
  }

});
