var Friends = {
	_friends : [],

	// Attach the click listener for the username
	initialize:()=>{
		$('body').on('click', '.username', function(e){
			let src = $(this);
			let username = src.html();

			Friends.toggleStatus(username);
		});
	},

	toggleStatus: (username)=>{
		//Find user index by name
			// IF doesn't exist add to friends
			// Else change status
		let index = _.findIndex(Friends._friends,(friend) => friend.username === username);

		console.log(index, Friends._friends);

		if(index > 0){
			Friends._friends[index].isFriend = !Friends._friends[index].isFriend; 
		}else{
			Friends._friends.push({
				username,
				isFriend: true,
			});
		}	
	}

};