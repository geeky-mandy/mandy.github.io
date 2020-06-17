// var e = require("express");

var socket = io()

let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do {
    name = prompt("Enter your name")
} while (!name)

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value);
    }
})

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    //and now append msg 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    //send this message to server
    socket.emit('message', msg)
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')


    let markup = ` 
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv)
}

//receive the message

socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')
    scrollToBottom()
})

//scroll to bottom for new message
function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}