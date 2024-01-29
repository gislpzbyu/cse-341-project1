  const express = require('express');
  const bodyParser = require('body-parser');
  const mongodb = require('./data/database');
  const app = express();

  const port = process.env.PORT || 3000;

app.use('/', require('./routes'));
app.use(bodyParser.json());



mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {

        app.listen(port, () => {console.log(`Running on port ${port}`)});
    }
});