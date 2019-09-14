const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const app = express();

// eslint-disable-next-line
app.listen(PORT, () => console.log('up and running'));
