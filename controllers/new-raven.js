App.NewRavenController = Ember.Controller.extend({
  messageError: false,
  houseTagsHolder: "",
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
        this.raven.houseTags.addObject(this.houseTagsHolder);
        ravens.addObject(this.raven);
        this.transitionToRoute('ravens');
      }
    }
  }

});
