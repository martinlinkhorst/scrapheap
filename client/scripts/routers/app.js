define([
], function () {

	var AppRouter = Backbone.Router.extend({

		routes: {
			'organizer/register-event': 'navigateToRegisterEvent',
			':eventId': 'navigateToSignUp',
			'': 'navigateToStartPage'
		},

		navigateToRegisterEvent: function() {
			curl([
				'views/organizer/register-event'
				// 'libs/jquery' wrapper
			]).then(
				function (RegisterEventView) {
					var registerEventView = new RegisterEventView();
					$('#app').html(registerEventView.render().el);
				},
				function (ex) {
					alert('error:' + ex.message);
				}
			);
		},

		navigateToSignUp: function(eventId) {
			curl([
				'models/event',
				'models/sign-up',
				'views/participant/sign-up'
				// 'libs/jquery' wrapper
			]).then(
				function (EventModel, SignUpModel, SignUpView) {
					var eventModel = new EventModel({'eventId': eventId})
					var signUpModel = new SignUpModel({'event': eventModel});
					var signUpView = new SignUpView({'model':signUpModel});
					$('#app').html(signUpView.render().el);
				},
				function (ex) {
					alert('error:' + ex.message);
				}
			);
		},

		navigateToStartPage: function () {
			$('#app').html('dev links<br><a href="/client/#organizer/register-event">organizer > register event</a><br><a href="/client/#abc">perticipant > sign up > abs</a><br><a href="/client/#123">perticipant > sign up > 123</a>');
		}

	});

	return AppRouter;

});