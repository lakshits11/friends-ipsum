const express = require('express');
const app = express();

// Require the express routes defined in router.js
const routes = require('./router');

const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Specify the routes to be used for our application 
app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
