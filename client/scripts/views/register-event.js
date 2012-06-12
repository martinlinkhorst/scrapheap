define([
	'models/event',
	'text!views/register-event.html'
], function (EventModel, RegisterEventMarkup) {

	var RegisterEventView = Backbone.View.extend({

		model: null,

		template: _.template(RegisterEventMarkup),

		initialize: function() {
			this.model = new EventModel();
		},

		events: { 
			'click #register': '_register',
			'change input': '_fieldsChanged' 
		},

		_fieldsChanged: function (event) {
			var target = event.target;
			var dataId = $(target).data('id');
			this.model.set(dataId, target.value);
		},

		_register: function(event) {
			this.model.save();
			//console.log('model', this.model);
		},

		render: function () {
			var html = this.template();
			this.$el.html(html);
			return this;
		}

	});

	return RegisterEventView;

});