var EventModel = Backbone.Model.extend( {

	url: 'http://'
	defaults: {
		name: '',
		date: '',
		startsAt: '',
		endsAt: '',
		description: '',
		location: ''
	}

})