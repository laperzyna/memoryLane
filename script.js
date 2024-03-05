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

    // on the onclick of the send button, "send" the message
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

document.addEventListener('DOMContentLoaded', function() {
    // grabbing the element by it's id
    var progressBar = document.getElementById('memory');
    // getting the current bar value for the html page we're on
    var currentValue = progressBar.value;
    var currPercentage = currentValue + '%';

    progressBar.style.setProperty('--progress-width', currPercentage);
    setTimeout(function() {
        // setting the progressbar value
        progressBar.value = currentValue;
    }, 100);
});

