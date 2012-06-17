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
			location: '',
			numberOfSeats: 0
		},

		url: '/server/services/participant/event/{eventId}.json.html',

		deferred: null,

		initialize: function(attributes) {
			if (attributes && attributes.eventId) {
				this._fetchData(attributes.eventId);
			} else {
				this._fakeFetch();
			}

			this._bindTriggers();
		},

		_fetchData: function(eventId) {
			this.url = this.url.replace('{eventId}', eventId);
			this.deferred = this.fetch();			
		},

		_fakeFetch: function() {
			this.deferred = jQuery.Deferred();
			this.deferred.resolve();
		},

		_bindTriggers: function () {
			this.on('change:numberOfSeats', function(model, numberOfSeats) {
    			this.set('numberOfSeats', parseInt(numberOfSeats, 10), {silent:true});
			});
		}	
	})	

	return EventModel;

});

