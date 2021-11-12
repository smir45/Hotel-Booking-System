const express = require("express");
const app = express();
const routes = require('./routes')
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// handle pre-flight requests
app.options("*", cors());

app.use('/api/auth/user',routes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

