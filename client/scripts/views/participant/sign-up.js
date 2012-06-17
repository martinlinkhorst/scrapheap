define([
	'text!views/participant/sign-up.html'
], function (SignUpMarkup) {

	var RegisterEventView = Backbone.View.extend({

		model: null, /* SignUpModel*/

		template: _.template(SignUpMarkup),

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
			// this.model.save();	
			console.log('model', this.model);
		},

		render: function () {
			var html = this.template();
			this.$el.html(html);
			this.model.deferred.done(this.renderModel.bind(this));
			return this;
		},

		renderModel: function () {
			// auto map?
			this.$el.find('#name').html(this.model.get('event').get('name'));
			this.$el.find('#description').html(this.model.get('event').get('description'));
			this.$el.find('#date').html(this.model.get('event').get('date'));
		}

	});

	return RegisterEventView;

});