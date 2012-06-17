define([
	// backbone, jquery, underscore
], function () {

	var SignUpModel = Backbone.Model.extend({
		
		defaults: {
			event: null, /* EventModel */
			name: '',
			mail: '',
			allergy: ''
		},

		deferred: null,

		initialize: function(attributes) {
			this.deferred = this.get('event').deferred;
		}
		
	})

	return SignUpModel;

});

