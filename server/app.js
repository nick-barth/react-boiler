// src/server.js
const path = require('path');
const Express = require('express');
const config = require('./config');
const api = require('./api');

const app = new Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'assets')));

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

// API
app.get('/api/champs', api.getAllChamps);
app.get('/api/champ/:id', api.getChamp);

// start the server
const port = config.port;
const env = config.name;

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port} [${env}]`);
});
