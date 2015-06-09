App.RavenController = Ember.ObjectController.extend({
  isReplying: false,
  actions: {
    replyRaven: function() {
      this.set('isReplying', true);
    },

    sendReplyRaven: function() {
      var userName = this.get('replyUserName');
      var text = this.get('replyText');

      var date = new Date();
      var newRaven = {
        id: ravens.length.toString(),
        userName: userName,
        text: text,
        houseTags: [],
        replies: [],
        date: date,
        dateString: date.toUTCString()
      };

      if (text.length > 141) {
        this.set('messageError', true);
      } else {
        var houseTagNames = this.get('replyHouseTags').split(', ');
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
        this.get('replies').addObject(newRaven);

        this.set('replyUserName', '');
        this.set('replyText', '');
        this.set('replyHouseTags', '');
        this.set('isReplying', false);
      }
    }
  }

});
