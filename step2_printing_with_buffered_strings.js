var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var dataString = '';

  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // callback gets invoked whhen a 'data' chunk is received
    response.on('data', function (data) {
      dataString += data;
    });

    // when there's no more data, do this
    response.on('end', function() {
      console.log('Response stream complete!');
      console.log(dataString);
    });
  });
}

getAndPrintHTML();
