var RoomsView = {
  $adding: $('#adding'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  _rooms: {},

  initialize: function() {
    // Clean the select options
    RoomsView.update();

  	// initialize listener
  	RoomsView.$button.on('click', function() {
  		// let _room = RoomsView.$select.val();
  		// alert(_room);
  	})

    RoomsView.$select.on('change', function(){
      let val = $(this).val(); 
      if(val === 'create'){
        $('#adding').fadeIn('slow');
      }else{
        $('#adding').fadeOut('slow');
      }
    });

  },

  update: function(){
    RoomsView.$select.html('<option value="create">Create room</option>');
  },

  render: function(data) {
  	//get all rooms 
  	// loop and call render room
	   _.each(data, (message) => {
    		if(message.roomname){
    	  		RoomsView._rooms[message.roomname] = message.roomname;
    		}
  	});

  	_.each(RoomsView._rooms, (room) => RoomsView.renderRoom(room));
  },

  renderRoom: function(room) {
  	let option = _.template('<option value="<%= room %>"> <%= room %> </option>')({room}); 
  	RoomsView.$select.append(option);
  }
};
