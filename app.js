// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const express = require('express')
const config = {
	views: 'views', 							// Set views directory
	static: 'public', 							// Set static assets directory
	logging: true,
	// controllers: require('./controllers'), 	// only for CMS integration
	db: {
	  url: 'mongodb://localhost/cricketdb',
    type: 'mongo',
    onError: (err) => {
	    console.log('DB connection failed')
    },
    onSuccess: () => {
      console.log('Cricket DB connected')
    }
  }
};



const app = vertex.app(config);

app.use(vertex.setContext(process.env));


// import routes
const index = require('./routes/index');
const api = require('./routes/api');

// set routes
app.use('/', index);
app.use('/api', api);


module.exports = app;