// require the https module
// should this go inside or outside of the the function?
var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // callback gets invoked whhen a 'data' chunk is received
    response.on('data', function (data) {
      console.log(data + '\n');
    });

    // when there's no more data, do this
    response.on('end', function() {
      console.log('Response stream complete!');
    });
  });
}

getAndPrintHTMLChunks();
