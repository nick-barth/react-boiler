// src/server.js
const path = require('path');
const Express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config');
const api = require('./api');

 require('./api/utils/passport')(passport);

const port = process.env.PORT || 8080;
const env = config.name;

const app = new Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(cookieParser());
app.use(bodyParser());
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
	let webpackManifest;

	const entry = 'main.js';
	const preloadScripts = ['vendor.js', entry];

	// Asset preloading
	// These headers may be picked by supported CDNs or other reverse-proxies and push the assets via HTTP/2
	// To disable PUSH, append '; nopush"
	// More details: https://blog.cloudflare.com/announcing-support-for-http-2-server-push-2/
	const linkHeaders = [...preloadScripts.map(script => `\</js/${script}\>; rel=preload; as=script`)];

	// Append Link headers
	res.set('Link', linkHeaders);

	res.render('index', {
		webpackManifest,
		entry,
		env
	});
});

// API
app.post('/api/updateMatchup', api.updateMatchup);
app.post('/api/champ/addTip', api.addTip);
app.get('/api/matchup', api.getMatchup);
app.get('/api/matchups', api.getMatchups);
app.get('/api/champs', api.getChampions);
app.get('/api/champ', api.getChampion);


app.listen(port, err => {
	if (err) {
		return console.error(err);
	}

	console.info(`Server running on http://localhost:${port} [${env}]`);
});
