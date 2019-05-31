const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const request = require('./request');

const port = 4242;

app.use(morgan("dev"));
app.use(morgan(":method :url :status :res[content-length] - :response-time "));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/date/:day/:month', (req, res) => {

  const dateId = req.params.day + '/' + req.params.month;

  request.calling_API(`http://numbersapi.com/${dateId}/date`)
  .then(response => {
      res.json(response);
  })
  .catch(error => {
      res.send(error);
  })
});

app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    };
    console.log(`Server is listening on port ${port}`);
  });
