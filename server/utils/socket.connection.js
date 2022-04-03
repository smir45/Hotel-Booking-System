const {Server} = require("socket.io");
const {addUsers, removeUser, getUser} = require("./socket/userConnection")


const io = new Server({
    cors: {
        origin: "http://localhost:5500",
    }
});


io.on("connection", (socket) => {
    console.log(" User connected");

    socket.on("newUser", (username) => {
        addUsers(username, socket.id);
        io.emit("onlineUsers", socket.id);
    })

    socket.on("sendMessage", (message) => {
        io.emit("message", message);
    })

    io.emit("message", "This is from socket backend");
    socket.on("disconnect", () => {
        removeUser(socket.id);
        console.log("disconnected");
    });
});

io.listen(5500);

module.exports = io;