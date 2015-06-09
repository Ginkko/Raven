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
        // var houseTags = this.houseTagsHolder.split(', ');
        // for (var i = 0; i < houseTags.length; i++) {
        //   newRaven.houseTags.push(houseTags[i]);
        // }
        ravens.addObject(newRaven);
        this.get('replies').addObject(newRaven);

        // this.set('userName', '');
        // this.set('text', '');
        // this.set('houseTagsHolder', '');
      }
      this.set('isReplying', false);
    }
  }

});
