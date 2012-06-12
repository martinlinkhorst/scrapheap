curl([
	'views/register-event'
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