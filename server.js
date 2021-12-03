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
io.on('connection', (socket) => {

    console.log(counter+' someone connected');
    if ('connection'){
        counter++;
    }
    socket.on('sendToAll', (message) =>{
        io.emit("displayMessage", (message));
    });

    socket.on('sendToMe', (message) =>{
        socket.emit("displayMessage", (message));
    });
});

