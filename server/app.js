// src/server.js
const path = require('path');
const Express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const config = require('./config');
const api = require('./api');

const app = new Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());
app.use(Express.static(path.join(__dirname, 'assets')));
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// App
app.get('*', (req, res, next) => {
	if (req.accepts('html', '*/*') !== 'html') {
		next();
		return;
	}

	let preloadScripts;
	let entry;
	let webpackManifest;

	if (app.locals.production) {
		// Set entry point
		entry = manifest.entry;

		// Webpack manifest (pre-generated script ready for injection, see above)
		webpackManifest = manifest.chunksSerialized;

		preloadScripts = [
			// Push entry script first, we need to start loading as soon as possible
			// because we need it immediately
			entry
	];

	// Append chunk of important routes to the preload list
	// Logic can be customized as needed. Can get complicated for recursive routes
	// or routes deep in site's hierarchy, so not always worth it
		if (req.path === '/') {
			preloadScripts.push(manifest.routes.home);
		}
		else {
			const route = req.path.substr(1);

			if (manifest.routes[route]) {
				preloadScripts.push(manifest.routes[route]);
			}
		}
	}
	else {
		entry = 'main.js';
		preloadScripts = ['vendor.js', entry];
	}

	// Asset preloading
	// These headers may be picked by supported CDNs or other reverse-proxies and push the assets via HTTP/2
	// To disable PUSH, append "; nopush"
	// More details: https://blog.cloudflare.com/announcing-support-for-http-2-server-push-2/
	const linkHeaders = [...preloadScripts.map(script => `\</js/${script}\>; rel=preload; as=script`)];

	// Append Link headers
	res.set('Link', linkHeaders);

	res.render('index', {
		webpackManifest,
		entry
	});
});

app.post('/signup', passport.authenticate('local-signup', {
	successRedirect: '/profile', // redirect to the secure profile section
	failureRedirect: '/signup' // redirect back to the signup page if there is an error
}));



// API
app.post('/api/updateMatchup', api.updateMatchup);
app.get('/api/matchup', api.getMatchup);
app.get('/api/matchups', api.getMatchups);
app.get('/api/champs', api.getChampions);
app.get('/api/champ', api.getChampion);

// start the server
const port = process.env.PORT || 8080;
const env = config.name;

app.listen(port, err => {
	if (err) {
		return console.error(err);
	}

	console.log(process.env.PORT);

	console.info(`Server running on http://localhost:${port} [${env}]`);
});
