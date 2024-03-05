// create a new Date object
const now = new Date();
const dateString = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// get the element by ID
const dateElement = document.getElementById('date');

// set the date
dateElement.textContent = dateString;

// send message functionality
document.addEventListener('DOMContentLoaded', function() {
    var sendButton = document.getElementById('send-btn');
    var chatInput = document.getElementById('chat-input');
    var chatContainer = document.getElementById('chat-messages-container');

    sendButton.addEventListener('click', function() {
        var messageText = chatInput.value.trim();
        if(messageText !== "") {
            var messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message', 'sender');
            messageDiv.textContent = messageText;
            chatContainer.appendChild(messageDiv);
            chatInput.value = '';
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    });
});
