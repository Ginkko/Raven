App.Router.map(function() {
  this.resource('ravens', {path: '/'});
  this.resource('about');
  this.resource('raven', {path: '/ravens/:raven_id'});
});
