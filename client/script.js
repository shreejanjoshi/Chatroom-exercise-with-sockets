let socket = io.connect();

const messagesContainer = document.getElementById('messages');

const name = prompt('What is your name?');
sendMessage(`Hi ${name} you joined in chatroom`);
socket.emit('newUser', name);
socket.emit

// socket.on('allUsers', user=>{

//     user.forEach(users => {
//         sendMessage(users.name);
//     });
// })
// // 

/*client*/
 
socket.on('displayMessage', (message) => {
    // messages.innerHTML += '<br><li>' + message;
    sendMessage(`${message.name}: ${message.message}`);
});

socket.on('userConnected', name => {
    // messages.innerHTML += '<br><li>' + message;
    sendMessage(`${name} connected`);
});

document.getElementById('sendToAll').addEventListener("click", function () {
    socket.emit('sendToAll', document.getElementById('message').value);
    document.getElementById('message').value = ' ';
})

//message to yourself
document.getElementById('sendToMe').addEventListener("click", function () {
    socket.emit('sendToMe', document.getElementById('message').value);
    document.getElementById('message').value = ' ';
})

function sendMessage(message){
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message; 
    messagesContainer.append(messageElement);
}

socket.on('showAllUsers', users =>{
    let allUsers = "";
    users.forEach(element => {
        
    });
})