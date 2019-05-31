const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const request = require('./request');

const port = 4242

app.use(morgan("dev"))
app.use(morgan(":method :url :status :res[content-length] - :response-time "))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  request.make_API_call('http://numbersapi.com/42')
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})

// app.get('/', (req, res) => {
//     const number = req.query.number;
  
//     request.make_API_call(`http://numbersapi.com/${number}/date`)
//     .then(response => {
//         res.json(response)
//     })
//     .catch(error => {
//         res.send(error)
//     });
// });

app.get('/fact/:id', (req, res) => {

  const factId = req.params.id
  console.log(factId);

  request.make_API_call(`http://numbersapi.com/${factId}`)
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})

app.get('/math/:id', (req, res) => {

  const mathId = req.params.id
  console.log(mathId);

  request.make_API_call(`http://numbersapi.com/${mathId}/math`)
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})

app.get('/date/:day/:month', (req, res) => {

  const dateId = req.params.day + '/' + req.params.month
  console.log(dateId);

  request.make_API_call(`http://numbersapi.com/${dateId}/date`)
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})

app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    };
    console.log(`Server is listening on port ${port}`);
  });

