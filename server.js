const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// app.use((e, req, res) => {
//   if (e) {
//     console.log(e.message); // eslint-disable-line
//     res.status(500).send(e.message);
//   }
// });

app.get('/', (req, res) => {
  res.send('Welcome to the default route. 3001');
});
// eslint-disable-next-line
app.listen(PORT, () => console.log('up and running'));
