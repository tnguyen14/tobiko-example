require.config({
	baseUrl: '/',
	deps: ['js/app'],

	paths: {
		text: 'bower_components/requirejs-plugins/lib/text',
		json: 'bower_components/requirejs-plugins/src/json',
		jquery: 'bower_components/jquery/dist/jquery.min'
	},

	// load non-amd dependencies
	shim: {
		jquery: {
			exports: 'jQuery'
		}
	},

	// Remove these modules from the final build
	stubModules: ['text', 'json']
});