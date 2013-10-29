Package.describe({
	summary: "filesaver.js packaged for use in Meteor."
});

Package.on_use(function (api) {
	api.add_files('lib/FileSaver.js', 'client');
});
