require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const {sequelize} = require("./models");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/destinations");
const hotelsPost = require("./routes/hotels");
const HostUserRoutes = require("./routes/user/host");
const HostelRoutes = require("./routes/hostels");
const RestaurentRoutes = require("./routes/destinations/restaurents");
const ImageRoutes = require("./routes/destinations/image.routes");
const FaqRoutes = require("./routes/faqs");
const fs = require("fs");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const imageUploadRoutes = require("./routes/imageUpload");
const blogRoutes = require("./routes/blogs");

const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "*",
        methods: "GET,POST",
    }
});

io.on('connection', (socket) => {
    console.log('a user connected')
    ;
    socket.on("chat", data => {
        socket.broadcast.emit("message", data);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})





const PORTT = process.env.PORT;
app.use(fileUpload());
app.use(cors());
app.disable('etag');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static(__dirname + "/public"));
app.use("/api/auth/user", userRoutes);
app.use("/api/destinations", postRoutes);
app.use("/api/destinations", ImageRoutes);
app.use("/api/auth/host/user", HostUserRoutes);
app.use("/api/hotels", hotelsPost);
app.use("/api/faq", FaqRoutes);
app.use("/api/hostels", HostelRoutes);
app.use("/api/restaurents", RestaurentRoutes);
app.use("/api/image", imageUploadRoutes);
app.use("/api/blogs", blogRoutes);
server.listen(PORTT, () => {
    // sequelize.sync({alter: true});
    console.log(`Server running on port ${PORTT}`);
});


