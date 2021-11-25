const express = require("express");
const app = express();
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT

app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// handle pre-flight requests


app.use('/api/auth/user',userRoutes)
app.use('/api/blog/',postRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

