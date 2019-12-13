var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.html('');
  },

  render: function(messages) {
  	// alert(JSON.stringify(messages));
  	_.each(messages, message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) { // handle unescaped html for XSS
  	if ('username' in message && 'text' in message){
  	 	let compiled = MessageView.render();
  	 	message.text = _.escape(message.text);
  	 	message.username = _.escape(message.username);
      
  		let html = compiled(message);

  		MessagesView.$chats.append(html);
  	}
  }

};