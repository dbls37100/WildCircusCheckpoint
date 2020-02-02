const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();

const port = 5000;


app.use(cors());

// Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port${port}`);
});
app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Authorization, access_token',
    'Access-Control-Expose-Headers': 'X-Requested-With,content-type, Authorization, access_token',
  });
});
