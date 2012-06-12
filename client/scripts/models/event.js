define([
	// backbone, jquery, underscore
], function () {

	var EventModel = Backbone.Model.extend( {
		
		defaults: {
			name: '',
			date: '',
			startsAt: '',
			endsAt: '',
			description: '',
			location: ''
		}/*,

		url: 'http://'*/
	})

	return EventModel;

});

