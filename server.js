'use strict';

const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.use('/react-mdl', express.static('node_modules/react-mdl/extra'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index-node.html');
});

const server = app.listen(8080, () => {
  let port = server.address().port;
  console.log(`Server running at http://localhost:${port}`);
});