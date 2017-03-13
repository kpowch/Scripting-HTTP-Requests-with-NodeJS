// Transforms the html string into 13375p34k (aka leetspeak, like how 'h4x0rs' talked in the 90s) - this is very similar to your password obfuscator from w1d1, with a few additional letters to substitute, and a few strings:
// a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'

var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  //console.log(html.toLowerCase());
}

getHTML(requestOptions, print1337);
