var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  messages: {},

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    App.feedUpdater();

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      App.messages = data;
      
      MessagesView.render(data.results);
      RoomsView.render(data.results);
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  feedUpdater: () => {
    setInterval(() => {
      RoomsView.update();
      MessagesView.initialize();
      App.fetch()
    },5000);
  }
};
