var Parse = {

  server: `http://localhost:3000/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    console.log(message, successCB, errorCB);
    $.ajax({
      type: "POST",
      url: Parse.server,
      contentType: 'application/json',
      data: JSON.stringify(message),
      sucess: (msg) => alert(msg),
      error: (err) =>{
        console.warn(err)
      }
    })

  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};