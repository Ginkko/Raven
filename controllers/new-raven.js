App.NewRavenController = Ember.Controller.extend({
  messageError: false,
  houseTagsHolder: "",

  raven: {
    userName: "",
    text: "",
  },

  actions: {
    saveRaven: function() {
      var date = new Date();
      var newRaven = {
        id: ravens.length.toString(),
        userName: this.raven.userName,
        text: this.raven.text,
        houseTags: [],
        replies: [],
        date: date,
        dateString: date.toUTCString()
      };
      if (this.raven.text.length > 141) {
        this.set('messageError', true);
      } else {
        var houseTags = this.houseTagsHolder.split(', ');
        for (var i = 0; i < houseTags.length; i++) {
          newRaven.houseTags.push(houseTags[i]);
        }
        ravens.addObject(newRaven);
        this.set('raven.userName', '');
        this.set('raven.text', '');
        this.set('houseTagsHolder', '');
        this.transitionToRoute('ravens');
      }
    }
  }

});
