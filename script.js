// create a new Date object
const now = new Date();
const dateString = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// game section logic to move character
function moveCharacter(direction) {
    // Get all character elements and find the one that's visible/active
    const characters = document.querySelectorAll('.character');
    let activeCharacter = null;

    characters.forEach((character) => {
        if (character.offsetParent !== null) {
            activeCharacter = character;
        }
    });

    // Proceed only if an active character is found
    if (activeCharacter) {
        const step = 50; // Adjust step size as needed
        let leftPosition = parseInt(activeCharacter.style.left, 10) || 50; // Default to 50 if not set

        switch (direction) {
            case 'left':
                leftPosition -= step;
                activeCharacter.style.left = `${leftPosition}%`;
                break;
            case 'right':
                leftPosition += step;
                activeCharacter.style.left = `${leftPosition}%`;
                break;
        }

        // Check if the character has reached the edge and decide where to navigate based on current page
        if (leftPosition <= 0 || leftPosition >= 100) {
            const currentPage = window.location.pathname.split('/').pop();

            // Determine the next page based on the current one
            let nextPage = '';
            if (currentPage === 'index.html' || currentPage === '') {
                nextPage = 'moshi.html'; 
            } else if (currentPage === 'moshi.html') {
                nextPage = 'babville.html';
            } else if (currentPage === 'babville.html') {
                nextPage = 'outMem.html';
            }
            window.location.href = nextPage;
        }
    }
}


// get the element by ID
const dateElement = document.getElementById('date');

// set the date
dateElement.textContent = dateString;

// send message functionality
document.addEventListener('DOMContentLoaded', function () {
    var sendButton = document.getElementById('send-btn');
    var chatInput = document.getElementById('chat-input');
    var chatContainer = document.getElementById('chat-messages-container');

    // on the onclick of the send button, "send" the message
    sendButton.addEventListener('click', function () {
        var messageText = chatInput.value.trim();
        if (messageText !== "") {
            var messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message', 'sender');
            messageDiv.textContent = messageText;
            chatContainer.appendChild(messageDiv);
            chatInput.value = '';
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // grabbing the element by it's id
    var progressBar = document.getElementById('memory');
    // getting the current bar value for the html page we're on
    var currentValue = progressBar.value;
    var currPercentage = currentValue + '%';

    progressBar.style.setProperty('--progress-width', currPercentage);
    setTimeout(function () {
        // setting the progressbar value
        progressBar.value = currentValue;
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    // Check if it's the specific page by checking the body's ID
    if (document.body.id === 'gray') {
      turnGrayscale();
    }
  });
  
  function turnGrayscale() {
    let grayscaleValue = 0;
    const interval = 100; // Interval in milliseconds for the effect to progress
    const duration = 5000; // Total duration in milliseconds for the effect to complete
    const step = interval / duration; // Calculate step size based on total duration and interval
  
    const intervalId = setInterval(() => {
      grayscaleValue += step; // Increment the grayscale value
      document.body.style.filter = `grayscale(${grayscaleValue * 100}%)`;
  
      if (grayscaleValue >= 1) {
        clearInterval(intervalId); // Stop when grayscale reaches 100%
      }
    }, interval);
  }
  
