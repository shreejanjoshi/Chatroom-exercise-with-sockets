// 

const express = require('express');
const http = require('http');


const app = express();
const clientPath = `${__dirname}/client`;
app.use(express.static(clientPath));
const server = http.createServer(app);
const port = 3000;
server.listen(port, () =>{
    console.log("server running on "+port);
});
const io = require('socket.io')(server);
let counter = 0;

const users= {};

io.on('connection', (socket) => {

    socket.on('newUser', name =>{
        users[socket.id] = name;
        socket.broadcast.emit(`userConnected`, name);
    })

    console.log(counter+' user connected');
    if ('connection'){
        counter++;
    }
    socket.on('sendToAll', message =>{
        io.emit("displayMessage", {message: message, name:users[socket.id]});
        // socket.broadcast.emit("displayMessage", {message: message, name:users[socket.id]});
    });

    socket.on('sendToMe', (message) =>{
        // socket.emit("displayMessage", (message));
        socket.emit("displayMessage", {message: message, name:users[socket.id]});
    });
});

