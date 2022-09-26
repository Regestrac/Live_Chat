const express = require("express");
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
    }
})

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join_room", (data) => {
        socket.join(data);
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", (data));
    })

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    })
})

server.listen(process.env.PORT || 7000, () => {
    console.log("Server started");
});