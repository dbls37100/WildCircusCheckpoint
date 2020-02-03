const express = require('express');
const cors = require('cors')
const app = express();
const { Tournees } = require('./models');
const port = 5000;

// Body Parser MiddleWare
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.post("/api/v1", async (req, res) => {
  const { nameActs, describes, placeNumber } = req.body;
  const artiste = await Tournees.create({
    nameActs,
    describes,
    placeNumber
  });
  res.status(200).send({ artiste });
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.get('/', function(req, res) {
  res.status(200).send('ok');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port${port}`);
});

