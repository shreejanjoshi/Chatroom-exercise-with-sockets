const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

const tech = io.of('/tech');

//when ever some one is the server do this
tech.on('connection', (socket) => {
    //creating another event. So everything works by events in socket, so, there's this event of connection when this event of connection happens then do this other event which is called message and send a message. So what we'll do is send this data. 
    // socket.emit('message', { manny: 'hey how are you?' })
    //we're going to pass that data once the event is emitted. And then, we're going to wait for another event. And when this event occurs, then do whatever you want with the data that's in here. 
    // socket.on('another event', (data) => {
    //     console.log(data);
    // })

    socket.on('join', (data) => {
        socket.join(data.room);
        tech.in(data.room).emit('message', `New user joined ${data.room} room!`);
    })
    socket.on('message', (data) => {
        console.log(`message: ${data.msg}`);
        tech.in(data.room).emit('message', data.msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        tech.emit('message', 'user disconnected');
    })
})


// const tech = io.of('/tech');

// tech.on('connection', (socket) => {
//     console.log('user connected');
//     socket.on('message', (msg) => {
//         console.log(`message: ${msg}`);
//         io.emit('message', msg);
//     });

//     socket.on('disconnect', () => {
//         console.log('user disconnected');

//         io.emit('message', 'user disconnected');
//     })
// })
