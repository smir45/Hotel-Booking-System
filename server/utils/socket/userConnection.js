const {io} = require("../socket.connection");

let onlineUsers = [];

const addUsers = (username, socketId) => {
    !onlineUsers.some((user) => {
        user.username === username && onlineUsers.push({username, socketId});
    })
};

const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => {
        return user.socketId !== socketId;
    })
};

const getUser = (username) => {
    return onlineUsers.find((user) => {
        return user.username === username;
    })
};

module.exports = {
    addUsers,
    removeUser,
    getUser
};