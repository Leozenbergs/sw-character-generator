var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')



var app = express()
app.use(serveStatic(path.join(__dirname, '/dist')))

app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
