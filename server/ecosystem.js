module.exports = {
	apps: [{
		name: 'quakechamp',
		script: './app.js',
		watch: true,
		env: {
			'NODE_ENV': 'production'
		}
	}]
};
