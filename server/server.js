require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const hotelsPost = require("./routes/HotelsPost");
const HostUserRoutes = require("./routes/hostUser");
const bodyParser = require("body-parser");

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/api/auth/user", userRoutes);
app.use("/api/blog/", postRoutes);
app.use("/api/auth/host/user", HostUserRoutes);
app.use("/api/blog/hotels", hotelsPost);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
