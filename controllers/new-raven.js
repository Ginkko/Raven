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
        var houseTagNames = this.houseTagsHolder.split(', ');
        for (var i = 0; i < houseTags.length; i++) {
          var foundHouseTag = houseTags.findBy("name", houseTagNames[i]);
          if (foundHouseTag){
            newRaven.houseTags.addObject(foundHouseTag);
            foundHouseTag.ravens.push(newRaven);
          } else {
            var newHouseTag = {
              id: houseTags.length,
              name: houseTagNames[i],
              ravens: []
            };
            newRaven.houseTags.addObject(newHouseTag);
            newHouseTag.ravens.push(newRaven);
            houseTags.addObject(newHouseTag);
          }
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
