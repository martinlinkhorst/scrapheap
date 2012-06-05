var RegisterEventView = Backbone.View.extend({

	model: null,

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

		var html = $('#register-event-template').html();
		this.$el.html(html);
		return this;
	}

});