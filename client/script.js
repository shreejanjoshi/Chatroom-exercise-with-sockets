let socket = io.connect();
/*client*/
document.getElementById('sendToAll').addEventListener("click", function () {
    socket.emit('sendToAll', document.getElementById('message').value);
})
socket.on('displayMessage', (message) => {
    messages.innerHTML += '<br><li>'+message;
});

//message to yourself
document.getElementById('sendToMe').addEventListener("click", function () {
    socket.emit('sendToMe', document.getElementById('message').value);
})