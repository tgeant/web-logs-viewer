var app = require('express')();
var http = require('http');
var server = http.createServer(app);
var fs = require('fs');

 
// logs:
var morgan = require('morgan');
var winston = require('winston');


// ---------- LOGS -------------

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream('/app/logs/access.log', {flags: 'a'});
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));


const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.prettyPrint()
	),
	transports: [
		new winston.transports.Console({level: 'warn', 'timestamp': true}),
		new winston.transports.File({ filename: '/app/logs/info.log', level: 'info', timestamp: true }),
		//new winston.transports.File({ filename: '/app/logs/dev.log', level: 'debug', timestamp: true })
	]
});




// ----------- EXPRESS -------------

// index.html page providing
app.get('/', function (req, res) {
  res.sendFile('/app/web/index.html');
});

app.get('/css/:style', function (req, res) {
  res.sendFile('/app/css/'+req.params.style+".css");
});

app.get('/img/:image', function (req, res) {
  res.sendFile('/app/img/'+req.params.image+".png");
});

app.get('/js/:script', function (req, res) {
  res.sendFile('/app/js/'+req.params.script+".js");
});



server.listen(8080);

