const express = require("express");
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const app = express();

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket)=>{
    console.log("User connected:",socket.id);

    socket.on("join_room", (data)=>{
        socket.join(data);
        console.log("RoomID: "+data);
    })

    socket.on("disconnect", ()=>{
        console.log("User disconnected:", socket.id);
    })
})

server.listen(3001, ()=>{
    console.log("Server started at port 3001");
});