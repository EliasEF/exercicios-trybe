let moment = require("moment");

let brasilTetra = moment('17071994', 'DDMMYYYY');

let fromNow = brasilTetra.fromNow();

console.log('Ouvimos o é "É TETRAAAA!" há: ' + fromNow)
