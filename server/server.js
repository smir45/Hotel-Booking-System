require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const {sequelize} = require("./models");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/destinations");
const hotelsPost = require('./routes/hotels');
const HostUserRoutes = require("./routes/user/host");
const HostelRoutes = require('./routes/hostels');
const RestaurentRoutes = require('./routes/destinations/restaurents');
const FaqRoutes = require("./routes/faqs");
const fs = require("fs");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload')

const port = process.env.PORT;
app.use(fileUpload())
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/api/auth/user", userRoutes);
app.use("/api/destinations", postRoutes);
app.use("/api/auth/host/user", HostUserRoutes);
app.use("/api/hotels", hotelsPost);
app.use("/api/faq", FaqRoutes);
app.use("/api/hostels", HostelRoutes);
app.use("/api/restaurents", RestaurentRoutes);
app.listen(port, () => {
    // sequelize.sync({alter: true});
    console.log(`Server running on port ${port}`);
});
