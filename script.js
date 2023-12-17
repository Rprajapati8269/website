// script.js

// Function to update the people count
function updatePeopleCount(count) {
    const countElement = document.getElementById('people-count');
    countElement.textContent = `Number of People: ${count}`;
}

// Simulate updating the content (replace this with actual data)
setInterval(() => {
    // Replace this with the actual number of people detected
    const simulatedPeopleCount = Math.floor(Math.random() * 10);
    updatePeopleCount(simulatedPeopleCount);
}, 5000); // Update every 5 seconds
