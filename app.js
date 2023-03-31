const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/', routes);

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
