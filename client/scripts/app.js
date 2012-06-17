curl([
	'routers/app'
]).then(
	function (AppRouter) {
		var appRouter = new AppRouter();
	    Backbone.history.start();
	},
	function (ex) {
		alert('error:' + ex.message);
	}
);
