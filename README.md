# Chatroom-exercise-with-sockets


io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('message', {manny: 'hey how are you?'})
    socket.on('another event', (data) => {
        console.log(data);
    })
})

So, basically, once someone is connected we'll send a message to that person so then we're going to wait for another event. So, there's going to be another event being emitted from the client, which we'll do in the second, in the index.html Once this is happening, whatever data we pass from that other event, then we'll console log that event. So let's save that and let's go inside of our index.html so we can create that event here. 