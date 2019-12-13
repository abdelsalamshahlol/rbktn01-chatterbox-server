var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    let text = FormView.$form.find('#message');
    let room = $('#rooms select').val()
    let username = window.location.search.slice(window.location.search.indexOf('=')+1);
    let message = Messages.build(text.val(),username,room);

    Parse.create(message, (d)=>{console.log({d})});
    console.log('click!', message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};